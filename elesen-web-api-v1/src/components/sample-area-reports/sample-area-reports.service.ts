import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SampleAreaReportEntity> {
    const entity = await this.sampleAreaReportsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaReportEntity with id ${id} not found`);
    }
    return entity;
  }
}

