import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SampleAreaApplicationHistorieEntity> {
    return this.sampleAreaApplicationHistoriesRepository.findOneBy({ id });
  }
}
