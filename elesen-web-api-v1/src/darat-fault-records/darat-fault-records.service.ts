import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratFaultRecordEntity } from './darat-fault-records.entity';

@Injectable()
export class DaratFaultRecordService {
  constructor(
    @InjectRepository(DaratFaultRecordEntity)
    private daratFaultRecordsRepository: Repository<DaratFaultRecordEntity>,
  ) {}

  findAll(): Promise<DaratFaultRecordEntity[]> {
    return this.daratFaultRecordsRepository.find();
  }

  findOne(id: string): Promise<DaratFaultRecordEntity> {
    return this.daratFaultRecordsRepository.findOneBy({ id });
  }
}
