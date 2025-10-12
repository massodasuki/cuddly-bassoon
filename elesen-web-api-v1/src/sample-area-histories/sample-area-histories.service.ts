import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaHistorieEntity } from './sample-area-histories.entity';

@Injectable()
export class SampleAreaHistorieService {
  constructor(
    @InjectRepository(SampleAreaHistorieEntity)
    private sampleAreaHistoriesRepository: Repository<SampleAreaHistorieEntity>,
  ) {}

  findAll(): Promise<SampleAreaHistorieEntity[]> {
    return this.sampleAreaHistoriesRepository.find();
  }

  async findOne(id: string): Promise<SampleAreaHistorieEntity> {
    const entity = await this.sampleAreaHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaHistorieEntity with id ${id} not found`);
    }
    return entity;
  }
}
