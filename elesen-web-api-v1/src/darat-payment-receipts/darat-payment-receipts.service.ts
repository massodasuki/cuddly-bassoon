import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratPaymentReceiptEntity> {
    return this.daratPaymentReceiptsRepository.findOneBy({ id });
  }
}
