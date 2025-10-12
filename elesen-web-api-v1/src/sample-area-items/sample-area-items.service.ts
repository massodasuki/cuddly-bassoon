import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaItemEntity } from './sample-area-items.entity';

@Injectable()
export class SampleAreaItemService {
  constructor(
    @InjectRepository(SampleAreaItemEntity)
    private sampleAreaItemsRepository: Repository<SampleAreaItemEntity>,
  ) {}

  findAll(): Promise<SampleAreaItemEntity[]> {
    return this.sampleAreaItemsRepository.find();
  }

  findOne(id: string): Promise<SampleAreaItemEntity> {
    return this.sampleAreaItemsRepository.findOneBy({ id });
  }
}
