import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReceiptEntity } from './receipts.entity';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(ReceiptEntity)
    private receiptsRepository: Repository<ReceiptEntity>,
  ) {}

  findAll(): Promise<ReceiptEntity[]> {
    return this.receiptsRepository.find();
  }

  async findOne(id: string): Promise<ReceiptEntity> {
    const entity = await this.receiptsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ReceiptEntity with id ${id} not found`);
    }
    return entity;
  }
}
