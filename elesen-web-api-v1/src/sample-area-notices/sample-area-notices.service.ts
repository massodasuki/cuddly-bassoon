import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SampleAreaNoticeEntity> {
    const entity = await this.sampleAreaNoticesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaNoticeEntity with id ${id} not found`);
    }
    return entity;
  }
}
