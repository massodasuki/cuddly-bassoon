import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SalesRecordNdEntity> {
    const entity = await this.salesRecordNdsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SalesRecordNdEntity with id ${id} not found`);
    }
    return entity;
  }
}
