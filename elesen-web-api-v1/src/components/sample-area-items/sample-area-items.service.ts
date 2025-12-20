import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SampleAreaItemEntity> {
    const entity = await this.sampleAreaItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaItemEntity with id ${id} not found`);
    }
    return entity;
  }
}

