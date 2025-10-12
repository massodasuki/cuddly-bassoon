import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SampleAreaNoticeEntity } from './sample-area-notices.entity';

@Injectable()
export class SampleAreaNoticeService {
  constructor(
    @InjectRepository(SampleAreaNoticeEntity)
    private sampleAreaNoticesRepository: Repository<SampleAreaNoticeEntity>,
  ) {}

  findAll(): Promise<SampleAreaNoticeEntity[]> {
    return this.sampleAreaNoticesRepository.find();
  }

  findOne(id: string): Promise<SampleAreaNoticeEntity> {
    return this.sampleAreaNoticesRepository.findOneBy({ id });
  }
}
