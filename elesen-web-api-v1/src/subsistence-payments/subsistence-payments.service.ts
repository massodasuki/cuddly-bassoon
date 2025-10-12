import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SubsistencePaymentEntity> {
    return this.subsistencePaymentsRepository.findOneBy({ id });
  }
}
