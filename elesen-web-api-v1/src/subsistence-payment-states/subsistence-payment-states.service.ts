import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistencePaymentStateEntity } from './subsistence-payment-states.entity';

@Injectable()
export class SubsistencePaymentStateService {
  constructor(
    @InjectRepository(SubsistencePaymentStateEntity)
    private subsistencePaymentStatesRepository: Repository<SubsistencePaymentStateEntity>,
  ) {}

  findAll(): Promise<SubsistencePaymentStateEntity[]> {
    return this.subsistencePaymentStatesRepository.find();
  }

  findOne(id: string): Promise<SubsistencePaymentStateEntity> {
    return this.subsistencePaymentStatesRepository.findOneBy({ id });
  }
}
