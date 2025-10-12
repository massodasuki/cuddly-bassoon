import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaApplicationDetailEntity } from './sample-area-application-details.entity';

@Injectable()
export class SampleAreaApplicationDetailService {
  constructor(
    @InjectRepository(SampleAreaApplicationDetailEntity)
    private sampleAreaApplicationDetailsRepository: Repository<SampleAreaApplicationDetailEntity>,
  ) {}

  findAll(): Promise<SampleAreaApplicationDetailEntity[]> {
    return this.sampleAreaApplicationDetailsRepository.find();
  }

  findOne(id: string): Promise<SampleAreaApplicationDetailEntity> {
    return this.sampleAreaApplicationDetailsRepository.findOneBy({ id });
  }
}
