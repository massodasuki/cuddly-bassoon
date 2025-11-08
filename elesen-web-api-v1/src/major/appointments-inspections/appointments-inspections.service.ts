import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments-inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments-inspections.dto';
import { ImageUploadService } from './image-upload.service';

@Injectable()
export class AppointmentsInspectionsService {
  constructor(
    @InjectRepository(AppointmentsInspections)
    private appointmentsInspectionsRepository: Repository<AppointmentsInspections>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  create(createAppointmentsInspectionsDto: CreateAppointmentsInspectionsDto): Promise<AppointmentsInspections> {
    const appointment = this.appointmentsInspectionsRepository.create(createAppointmentsInspectionsDto);
    return this.appointmentsInspectionsRepository.save(appointment);
  }

  findAll(): Promise<AppointmentsInspections[]> {
    return this.appointmentsInspectionsRepository.find();
  }

  async findOne(id: string): Promise<AppointmentsInspections> {
    const appointment = await this.appointmentsInspectionsRepository.findOneBy({ id });
    if (!appointment) {
      throw new NotFoundException(`AppointmentsInspections with id ${id} not found`);
    }
    return appointment;
  }

  async update(id: string, updateAppointmentsInspectionsDto: UpdateAppointmentsInspectionsDto): Promise<AppointmentsInspections> {
    const appointment = await this.findOne(id);
    Object.assign(appointment, updateAppointmentsInspectionsDto);
    return this.appointmentsInspectionsRepository.save(appointment);
  }

  async remove(id: string): Promise<void> {
    const appointment = await this.findOne(id);
    await this.appointmentsInspectionsRepository.remove(appointment);
  }

  async createWithFiles(createDto: CreateAppointmentsInspectionsDto, files: { [key: string]: Express.Multer.File[] }): Promise<AppointmentsInspections> {
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
      wakil_no_ic: createDto.wakil?.noIc,
      wakil_surat_wakil: createDto.suratWakil,
      ulasan: createDto.ulasan,
      status: createDto.status,
      timestamp: createDto.timestamp ? new Date(createDto.timestamp) : undefined,
      created_by: createDto.createdBy,
    };

    const appointment = this.appointmentsInspectionsRepository.create(entityData);
    return this.appointmentsInspectionsRepository.save(appointment);
  }
}