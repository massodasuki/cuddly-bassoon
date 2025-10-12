import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SampleAreaEntity> {
    return this.sampleAreasRepository.findOneBy({ id });
  }
}
