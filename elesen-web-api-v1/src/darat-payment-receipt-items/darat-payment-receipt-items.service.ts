import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratPaymentReceiptItemEntity } from './darat-payment-receipt-items.entity';

@Injectable()
export class DaratPaymentReceiptItemService {
  constructor(
    @InjectRepository(DaratPaymentReceiptItemEntity)
    private daratPaymentReceiptItemsRepository: Repository<DaratPaymentReceiptItemEntity>,
  ) {}

  findAll(): Promise<DaratPaymentReceiptItemEntity[]> {
    return this.daratPaymentReceiptItemsRepository.find();
  }

  async findOne(id: string): Promise<DaratPaymentReceiptItemEntity> {
    const entity = await this.daratPaymentReceiptItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
