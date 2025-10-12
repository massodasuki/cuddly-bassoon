import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FishingLogNdEntity } from './fishing-log-nds.entity';

@Injectable()
export class FishingLogNdService {
  constructor(
    @InjectRepository(FishingLogNdEntity)
    private fishingLogNdsRepository: Repository<FishingLogNdEntity>,
  ) {}

  findAll(): Promise<FishingLogNdEntity[]> {
    return this.fishingLogNdsRepository.find();
  }

  async findOne(id: string): Promise<FishingLogNdEntity> {
    const entity = await this.fishingLogNdsRepository.findOneBy({ fishing_log_id: id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
