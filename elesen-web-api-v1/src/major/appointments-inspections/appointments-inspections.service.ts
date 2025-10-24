import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { CreateAppointmentsInspectionsDto } from './dto/create-appointments-inspections.dto';
import { UpdateAppointmentsInspectionsDto } from './dto/update-appointments-inspections.dto';

@Injectable()
export class AppointmentsInspectionsService {
  constructor(
    @InjectRepository(AppointmentsInspections)
    private appointmentsInspectionsRepository: Repository<AppointmentsInspections>,
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
}