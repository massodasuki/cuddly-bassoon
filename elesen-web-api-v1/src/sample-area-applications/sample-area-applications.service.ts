import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaApplicationEntity } from './sample-area-applications.entity';

@Injectable()
export class SampleAreaApplicationService {
  constructor(
    @InjectRepository(SampleAreaApplicationEntity)
    private sampleAreaApplicationsRepository: Repository<SampleAreaApplicationEntity>,
  ) {}

  findAll(): Promise<SampleAreaApplicationEntity[]> {
    return this.sampleAreaApplicationsRepository.find();
  }

  findOne(id: string): Promise<SampleAreaApplicationEntity> {
    return this.sampleAreaApplicationsRepository.findOneBy({ id });
  }
}
