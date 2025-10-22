import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SampleAreaApplicationEntity> {
    const entity = await this.sampleAreaApplicationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaApplicationEntity with id ${id} not found`);
    }
    return entity;
  }
}
