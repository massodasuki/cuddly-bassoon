import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationAtfPaymentEntity } from './application_atf_payment.entity';
import { CreateApplicationAtfPaymentDto } from './dto/create-application_atf_payment.dto';
import { UpdateApplicationAtfPaymentDto } from './dto/update-application_atf_payment.dto';

@Injectable()
export class ApplicationAtfPaymentService {
  constructor(
    @InjectRepository(ApplicationAtfPaymentEntity)
    private applicationAtfPaymentRepository: Repository<ApplicationAtfPaymentEntity>,
  ) {}

  findAll(): Promise<ApplicationAtfPaymentEntity[]> {
    return this.applicationAtfPaymentRepository.find();
  }

  async findOne(id: string): Promise<ApplicationAtfPaymentEntity> {
    const entity = await this.applicationAtfPaymentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationAtfPaymentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationAtfPaymentDto: CreateApplicationAtfPaymentDto): Promise<ApplicationAtfPaymentEntity> {
    const entity = this.applicationAtfPaymentRepository.create(createApplicationAtfPaymentDto);
    return this.applicationAtfPaymentRepository.save(entity);
  }

  async update(id: string, updateApplicationAtfPaymentDto: UpdateApplicationAtfPaymentDto): Promise<ApplicationAtfPaymentEntity> {
    await this.applicationAtfPaymentRepository.update(id, updateApplicationAtfPaymentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationAtfPaymentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationAtfPaymentEntity[]> {
    return this.applicationAtfPaymentRepository.find({
      where: { application_id: applicationId }
    });
  }
}