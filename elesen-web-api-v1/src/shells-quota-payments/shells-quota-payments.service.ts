import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShellsQuotaPaymentEntity } from './shells-quota-payments.entity';

@Injectable()
export class ShellsQuotaPaymentService {
  constructor(
    @InjectRepository(ShellsQuotaPaymentEntity)
    private shellsQuotaPaymentsRepository: Repository<ShellsQuotaPaymentEntity>,
  ) {}

  findAll(): Promise<ShellsQuotaPaymentEntity[]> {
    return this.shellsQuotaPaymentsRepository.find();
  }

  findOne(id: string): Promise<ShellsQuotaPaymentEntity> {
    return this.shellsQuotaPaymentsRepository.findOneBy({ id });
  }
}
