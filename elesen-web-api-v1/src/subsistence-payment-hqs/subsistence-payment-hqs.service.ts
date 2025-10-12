import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SubsistencePaymentHqEntity> {
    return this.subsistencePaymentHqsRepository.findOneBy({ id });
  }
}
