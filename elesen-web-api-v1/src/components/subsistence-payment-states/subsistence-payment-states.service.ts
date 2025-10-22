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

  async findOne(id: string): Promise<SubsistencePaymentStateEntity> {
    const subsistencePaymentState = await this.subsistencePaymentStatesRepository.findOneBy({ id });
    if (!subsistencePaymentState) {
      throw new Error('SubsistencePaymentState not found');
    }
    return subsistencePaymentState;
  }
}
