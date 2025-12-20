import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SampleAreaLocationEntity> {
    const entity = await this.sampleAreaLocationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SampleAreaLocationEntity with id ${id} not found`);
    }
    return entity;
  }
}

