import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaEntity } from './sample-areas.entity';

@Injectable()
export class SampleAreaService {
  constructor(
    @InjectRepository(SampleAreaEntity)
    private sampleAreasRepository: Repository<SampleAreaEntity>,
  ) {}

  findAll(): Promise<SampleAreaEntity[]> {
    return this.sampleAreasRepository.find();
  }

  async findOne(id: string): Promise<SampleAreaEntity> {
    const entity = await this.sampleAreasRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaEntity with id ${id} not found`);
    }
    return entity;
  }
}
