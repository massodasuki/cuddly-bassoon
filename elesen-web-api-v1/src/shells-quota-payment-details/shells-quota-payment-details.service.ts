import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ShellsQuotaPaymentDetailEntity> {
    const entity = await this.shellsQuotaPaymentDetailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ShellsQuotaPaymentDetailEntity with id ${id} not found`);
    }
    return entity;
  }
}
