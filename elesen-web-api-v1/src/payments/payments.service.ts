import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentEntity } from './payments.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentsRepository: Repository<PaymentEntity>,
  ) {}

  findAll(): Promise<PaymentEntity[]> {
    return this.paymentsRepository.find();
  }

  findOne(id: string): Promise<PaymentEntity> {
    return this.paymentsRepository.findOneBy({ id });
  }
}
