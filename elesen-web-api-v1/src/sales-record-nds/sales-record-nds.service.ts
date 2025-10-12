import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesRecordNdEntity } from './sales-record-nds.entity';

@Injectable()
export class SalesRecordNdService {
  constructor(
    @InjectRepository(SalesRecordNdEntity)
    private salesRecordNdsRepository: Repository<SalesRecordNdEntity>,
  ) {}

  findAll(): Promise<SalesRecordNdEntity[]> {
    return this.salesRecordNdsRepository.find();
  }

  findOne(id: string): Promise<SalesRecordNdEntity> {
    return this.salesRecordNdsRepository.findOneBy({ id });
  }
}
