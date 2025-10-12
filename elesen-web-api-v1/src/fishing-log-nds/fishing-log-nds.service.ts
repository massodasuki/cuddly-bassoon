import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<FishingLogNdEntity> {
    return this.fishingLogNdsRepository.findOneBy({ id });
  }
}
