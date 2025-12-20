import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ReceiptItemEntity> {
    const entity = await this.receiptItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ReceiptItemEntity with id ${id} not found`);
    }
    return entity;
  }
}

