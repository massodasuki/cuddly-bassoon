import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ReceiptEntity> {
    return this.receiptsRepository.findOneBy({ id });
  }
}
