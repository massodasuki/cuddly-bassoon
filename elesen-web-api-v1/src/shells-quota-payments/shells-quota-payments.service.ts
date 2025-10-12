import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ShellsQuotaPaymentEntity> {
    const entity = await this.shellsQuotaPaymentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ShellsQuotaPaymentEntity with id ${id} not found`);
    }
    return entity;
  }
}
