import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShellsQuotaPaymentDetailEntity } from './shells-quota-payment-details.entity';

@Injectable()
export class ShellsQuotaPaymentDetailService {
  constructor(
    @InjectRepository(ShellsQuotaPaymentDetailEntity)
    private shellsQuotaPaymentDetailsRepository: Repository<ShellsQuotaPaymentDetailEntity>,
  ) {}

  findAll(): Promise<ShellsQuotaPaymentDetailEntity[]> {
    return this.shellsQuotaPaymentDetailsRepository.find();
  }

  findOne(id: string): Promise<ShellsQuotaPaymentDetailEntity> {
    return this.shellsQuotaPaymentDetailsRepository.findOneBy({ id });
  }
}
