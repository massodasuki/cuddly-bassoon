import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistencePaymentPayeeEntity } from './subsistence-payment-payees.entity';

@Injectable()
export class SubsistencePaymentPayeeService {
  constructor(
    @InjectRepository(SubsistencePaymentPayeeEntity)
    private subsistencePaymentPayeesRepository: Repository<SubsistencePaymentPayeeEntity>,
  ) {}

  findAll(): Promise<SubsistencePaymentPayeeEntity[]> {
    return this.subsistencePaymentPayeesRepository.find();
  }

  findOne(id: string): Promise<SubsistencePaymentPayeeEntity> {
    return this.subsistencePaymentPayeesRepository.findOneBy({ id });
  }
}
