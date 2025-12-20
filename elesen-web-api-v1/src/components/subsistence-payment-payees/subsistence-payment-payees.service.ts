import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SubsistencePaymentPayeeEntity> {
    const entity = await this.subsistencePaymentPayeesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistencePaymentPayeeEntity with id ${id} not found`);
    }
    return entity;
  }
}

