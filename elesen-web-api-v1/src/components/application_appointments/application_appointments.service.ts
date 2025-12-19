import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationAppointmentsEntity } from './application_appointments.entity';
import { CreateApplicationAppointmentsDto } from './dto/create-application_appointments.dto';
import { UpdateApplicationAppointmentsDto } from './dto/update-application_appointments.dto';

@Injectable()
export class ApplicationAppointmentsService {
  constructor(
    @InjectRepository(ApplicationAppointmentsEntity)
    private applicationAppointmentsRepository: Repository<ApplicationAppointmentsEntity>,
  ) {}

  findAll(): Promise<ApplicationAppointmentsEntity[]> {
    return this.applicationAppointmentsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationAppointmentsEntity> {
    const entity = await this.applicationAppointmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationAppointmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationAppointmentsDto: CreateApplicationAppointmentsDto): Promise<ApplicationAppointmentsEntity> {
    const entity = this.applicationAppointmentsRepository.create(createApplicationAppointmentsDto);
    return this.applicationAppointmentsRepository.save(entity);
  }

  async update(id: string, updateApplicationAppointmentsDto: UpdateApplicationAppointmentsDto): Promise<ApplicationAppointmentsEntity> {
    await this.applicationAppointmentsRepository.update(id, updateApplicationAppointmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationAppointmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationAppointmentsEntity[]> {
    return this.applicationAppointmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}