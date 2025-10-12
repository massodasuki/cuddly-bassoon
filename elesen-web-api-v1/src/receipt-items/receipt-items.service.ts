import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReceiptItemEntity } from './receipt-items.entity';

@Injectable()
export class ReceiptItemService {
  constructor(
    @InjectRepository(ReceiptItemEntity)
    private receiptItemsRepository: Repository<ReceiptItemEntity>,
  ) {}

  findAll(): Promise<ReceiptItemEntity[]> {
    return this.receiptItemsRepository.find();
  }

  findOne(id: string): Promise<ReceiptItemEntity> {
    return this.receiptItemsRepository.findOneBy({ id });
  }
}
