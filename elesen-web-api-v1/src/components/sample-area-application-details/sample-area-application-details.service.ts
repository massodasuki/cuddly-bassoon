import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SampleAreaApplicationDetailEntity> {
    const entity = await this.sampleAreaApplicationDetailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaApplicationDetailEntity with id ${id} not found`);
    }
    return entity;
  }
}

