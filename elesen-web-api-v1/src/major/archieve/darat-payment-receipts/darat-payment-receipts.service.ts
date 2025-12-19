import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratPaymentReceiptEntity } from './darat-payment-receipts.entity';

@Injectable()
export class DaratPaymentReceiptService {
  constructor(
    @InjectRepository(DaratPaymentReceiptEntity)
    private daratPaymentReceiptsRepository: Repository<DaratPaymentReceiptEntity>,
  ) {}

  findAll(): Promise<DaratPaymentReceiptEntity[]> {
    return this.daratPaymentReceiptsRepository.find();
  }

  async findOne(id: string): Promise<DaratPaymentReceiptEntity> {
    const entity = await this.daratPaymentReceiptsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
