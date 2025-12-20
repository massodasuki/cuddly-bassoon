import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<DaratFaultRecordEntity> {
    const entity = await this.daratFaultRecordsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

