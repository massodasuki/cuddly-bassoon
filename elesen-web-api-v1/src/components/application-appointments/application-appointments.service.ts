import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationAppointmentEntity } from './application-appointments.entity';
import { CreateApplicationAppointmentDto } from './dto/create-application-appointments.dto';
import { UpdateApplicationAppointmentDto } from './dto/update-application-appointments.dto';

@Injectable()
export class ApplicationAppointmentService {
  constructor(
    @InjectRepository(ApplicationAppointmentEntity)
    private applicationAppointmentsRepository: Repository<ApplicationAppointmentEntity>,
  ) {}

  findAll(): Promise<ApplicationAppointmentEntity[]> {
    return this.applicationAppointmentsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationAppointmentEntity> {
    const entity = await this.applicationAppointmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationAppointmentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationAppointmentDto: CreateApplicationAppointmentDto): Promise<ApplicationAppointmentEntity> {
    const applicationAppointment = this.applicationAppointmentsRepository.create(createApplicationAppointmentDto);
    return this.applicationAppointmentsRepository.save(applicationAppointment);
  }

  async update(id: string, updateApplicationAppointmentDto: UpdateApplicationAppointmentDto): Promise<ApplicationAppointmentEntity> {
    await this.applicationAppointmentsRepository.update(id, updateApplicationAppointmentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationAppointmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationAppointmentEntity[]> {
    return this.applicationAppointmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}