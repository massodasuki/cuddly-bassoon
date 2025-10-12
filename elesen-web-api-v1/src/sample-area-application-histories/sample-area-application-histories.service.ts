import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaApplicationHistorieEntity } from './sample-area-application-histories.entity';

@Injectable()
export class SampleAreaApplicationHistorieService {
  constructor(
    @InjectRepository(SampleAreaApplicationHistorieEntity)
    private sampleAreaApplicationHistoriesRepository: Repository<SampleAreaApplicationHistorieEntity>,
  ) {}

  findAll(): Promise<SampleAreaApplicationHistorieEntity[]> {
    return this.sampleAreaApplicationHistoriesRepository.find();
  }

  async findOne(id: string): Promise<SampleAreaApplicationHistorieEntity> {
    const entity = await this.sampleAreaApplicationHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaApplicationHistorieEntity with id ${id} not found`);
    }
    return entity;
  }
}
