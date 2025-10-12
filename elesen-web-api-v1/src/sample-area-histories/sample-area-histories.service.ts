import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SampleAreaHistorieEntity> {
    return this.sampleAreaHistoriesRepository.findOneBy({ id });
  }
}
