import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentsInspectionsEntity } from './appointments-inspections.entity';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments-inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments-inspections.dto';

@Injectable()
export class AppointmentsInspectionsService {
  constructor(
    @InjectRepository(AppointmentsInspectionsEntity)
    private appointmentsInspectionsRepository: Repository<AppointmentsInspectionsEntity>,
  ) {}

  findAll(): Promise<AppointmentsInspectionsEntity[]> {
    return this.appointmentsInspectionsRepository.find();
  }

  async findOne(id: string): Promise<AppointmentsInspectionsEntity> {
    const entity = await this.appointmentsInspectionsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`AppointmentsInspectionsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createAppointmentsInspectionsDto: CreateAppointmentsInspectionsDto): Promise<AppointmentsInspectionsEntity> {
    const entity = this.appointmentsInspectionsRepository.create(createAppointmentsInspectionsDto);
    return this.appointmentsInspectionsRepository.save(entity);
  }

  async update(id: string, updateAppointmentsInspectionsDto: UpdateAppointmentsInspectionsDto): Promise<AppointmentsInspectionsEntity> {
    await this.appointmentsInspectionsRepository.update(id, updateAppointmentsInspectionsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.appointmentsInspectionsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<AppointmentsInspectionsEntity[]> {
    return this.appointmentsInspectionsRepository.find({
      where: { application_id: applicationId }
    });
  }
}