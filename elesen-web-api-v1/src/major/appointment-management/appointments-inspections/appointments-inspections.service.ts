import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments-inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments-inspections.dto';
import { AppointmentsInspectionsResponseDto } from './dto/appointments-inspections-response.dto';
import { ImageUploadService } from './image-upload.service';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';

@Injectable()
export class AppointmentsInspectionsService {
  constructor(
    @InjectRepository(AppointmentsInspections)
    private appointmentsInspectionsRepository: Repository<AppointmentsInspections>,
    @InjectRepository(DaratApplicationEntity)
    private daratApplicationRepository: Repository<DaratApplicationEntity>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  create(createAppointmentsInspectionsDto: CreateAppointmentsInspectionsDto): Promise<AppointmentsInspectionsResponseDto> {
    const appointment = this.appointmentsInspectionsRepository.create(createAppointmentsInspectionsDto);
    return this.appointmentsInspectionsRepository.save(appointment).then(saved => plainToClass(AppointmentsInspectionsResponseDto, saved, { excludeExtraneousValues: true }));
  }

  findAll(): Promise<AppointmentsInspectionsResponseDto[]> {
    return this.appointmentsInspectionsRepository.find().then(appointments => appointments.map(appointment => plainToClass(AppointmentsInspectionsResponseDto, appointment, { excludeExtraneousValues: true })));
  }

  async findOne(id: string): Promise<AppointmentsInspectionsResponseDto> {
    const appointment = await this.appointmentsInspectionsRepository.findOneBy({ id });
    if (!appointment) {
      throw new NotFoundException(`AppointmentsInspections with id ${id} not found`);
    }
    return plainToClass(AppointmentsInspectionsResponseDto, appointment, { excludeExtraneousValues: true });
  }

  async findByApplicationId(applicationId: string): Promise<AppointmentsInspectionsResponseDto> {
    const appointment = await this.appointmentsInspectionsRepository.findOneBy({ applications_id : applicationId });
    if (!appointment) {
      throw new NotFoundException(`AppointmentsInspections with application_id ${applicationId} not found`);
    }
    console.log(appointment);
    return plainToClass(AppointmentsInspectionsResponseDto, appointment, { excludeExtraneousValues: true });
  }

  async update(id: string, updateAppointmentsInspectionsDto: UpdateAppointmentsInspectionsDto): Promise<AppointmentsInspectionsResponseDto> {
    const appointment = await this.appointmentsInspectionsRepository.findOneBy({ id });
    if (!appointment) {
      throw new NotFoundException(`AppointmentsInspections with id ${id} not found`);
    }
    Object.assign(appointment, updateAppointmentsInspectionsDto);
    const saved = await this.appointmentsInspectionsRepository.save(appointment);
    return plainToClass(AppointmentsInspectionsResponseDto, saved, { excludeExtraneousValues: true });
  }

  async remove(id: string): Promise<void> {
    const appointment = await this.appointmentsInspectionsRepository.findOneBy({ id });
    if (!appointment) {
      throw new NotFoundException(`AppointmentsInspections with id ${id} not found`);
    }
    await this.appointmentsInspectionsRepository.remove(appointment);
  }

  async createWithFiles(createDto: CreateAppointmentsInspectionsDto, files: { [key: string]: Express.Multer.File[] }): Promise<AppointmentsInspectionsResponseDto> {
    // Check if applicationsId exists in darat_applications
    const application = await this.daratApplicationRepository.findOneBy({ id: createDto.applicationsId });
    if (!application) {
      throw new NotFoundException(`Application with id ${createDto.applicationsId} not found`);
    }

    let uploadedFiles: Record<string, string> = {};

    if (files && Object.keys(files).length > 0) {
      const fileArray = Object.values(files).flat();
      uploadedFiles = await this.imageUploadService.uploadImages(fileArray, createDto.applicationsId || 'default');
    }

    // Update the DTO with uploaded file paths
    console.log(createDto);
    if (uploadedFiles['surat_wakil']) {
      createDto.wakil = createDto.wakil || {};
      createDto.suratWakil = uploadedFiles['surat_wakil'];
    }

    // Map DTO fields to entity fields
    const entityData = {
      applications_id: createDto.applicationsId,
      no_vessel: createDto.noVessel,
      kehadiran: createDto.kehadiran,
      dihadiri_oleh: createDto.dihadiriOleh,
      wakil_nama: createDto.wakil?.nama,
      wakil_no_ic: createDto.wakil?.noKadPengenalan,
      wakil_surat_wakil: createDto.suratWakil,
      ulasan: createDto.ulasan,
      status: createDto.status,
      timestamp: createDto.timestamp ? new Date(createDto.timestamp) : undefined,
      created_by: createDto.createdBy,
    };

    const appointment = this.appointmentsInspectionsRepository.create(entityData);
    const saved = await this.appointmentsInspectionsRepository.save(appointment);
    return plainToClass(AppointmentsInspectionsResponseDto, saved, { excludeExtraneousValues: true });
  }
}