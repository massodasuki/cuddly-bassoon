import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bPaymentEntity } from './ppv04b-payment.entity';
import { CreatePpv04bPaymentDto } from './dto/create-ppv04b-payment.dto';
import { UpdatePpv04bPaymentDto } from './dto/update-ppv04b-payment.dto';

@Injectable()
export class Ppv04bPaymentService {
  constructor(
    @InjectRepository(Ppv04bPaymentEntity)
    private ppv04bPaymentRepository: Repository<Ppv04bPaymentEntity>,
  ) {}

  findAll(): Promise<Ppv04bPaymentEntity[]> {
    return this.ppv04bPaymentRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bPaymentEntity> {
    const entity = await this.ppv04bPaymentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bPaymentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bPaymentDto: CreatePpv04bPaymentDto): Promise<Ppv04bPaymentEntity> {
    const entity = this.ppv04bPaymentRepository.create(createPpv04bPaymentDto);
    return this.ppv04bPaymentRepository.save(entity);
  }

  async update(id: string, updatePpv04bPaymentDto: UpdatePpv04bPaymentDto): Promise<Ppv04bPaymentEntity> {
    await this.ppv04bPaymentRepository.update(id, updatePpv04bPaymentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bPaymentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bPaymentEntity[]> {
    return this.ppv04bPaymentRepository.find({
      where: { application_id: applicationId }
    });
  }
}