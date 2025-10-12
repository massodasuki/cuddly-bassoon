import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaLocationEntity } from './sample-area-locations.entity';

@Injectable()
export class SampleAreaLocationService {
  constructor(
    @InjectRepository(SampleAreaLocationEntity)
    private sampleAreaLocationsRepository: Repository<SampleAreaLocationEntity>,
  ) {}

  findAll(): Promise<SampleAreaLocationEntity[]> {
    return this.sampleAreaLocationsRepository.find();
  }

  findOne(id: string): Promise<SampleAreaLocationEntity> {
    return this.sampleAreaLocationsRepository.findOneBy({ id });
  }
}
