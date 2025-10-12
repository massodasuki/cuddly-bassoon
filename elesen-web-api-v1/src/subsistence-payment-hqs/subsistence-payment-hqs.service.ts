import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistencePaymentHqEntity } from './subsistence-payment-hqs.entity';

@Injectable()
export class SubsistencePaymentHqService {
  constructor(
    @InjectRepository(SubsistencePaymentHqEntity)
    private subsistencePaymentHqsRepository: Repository<SubsistencePaymentHqEntity>,
  ) {}

  findAll(): Promise<SubsistencePaymentHqEntity[]> {
    return this.subsistencePaymentHqsRepository.find();
  }

  async findOne(id: string): Promise<SubsistencePaymentHqEntity> {
    const entity = await this.subsistencePaymentHqsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistencePaymentHqEntity with id ${id} not found`);
    }
    return entity;
  }
}
