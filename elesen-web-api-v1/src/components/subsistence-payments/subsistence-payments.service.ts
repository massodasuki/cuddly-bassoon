import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistencePaymentEntity } from './subsistence-payments.entity';

@Injectable()
export class SubsistencePaymentService {
  constructor(
    @InjectRepository(SubsistencePaymentEntity)
    private subsistencePaymentsRepository: Repository<SubsistencePaymentEntity>,
  ) {}

  findAll(): Promise<SubsistencePaymentEntity[]> {
    return this.subsistencePaymentsRepository.find();
  }

  async findOne(id: string): Promise<SubsistencePaymentEntity> {
    const entity = await this.subsistencePaymentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistencePaymentEntity with id ${id} not found`);
    }
    return entity;
  }
}
