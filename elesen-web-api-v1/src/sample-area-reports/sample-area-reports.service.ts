import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaReportEntity } from './sample-area-reports.entity';

@Injectable()
export class SampleAreaReportService {
  constructor(
    @InjectRepository(SampleAreaReportEntity)
    private sampleAreaReportsRepository: Repository<SampleAreaReportEntity>,
  ) {}

  findAll(): Promise<SampleAreaReportEntity[]> {
    return this.sampleAreaReportsRepository.find();
  }

  findOne(id: string): Promise<SampleAreaReportEntity> {
    return this.sampleAreaReportsRepository.findOneBy({ id });
  }
}
