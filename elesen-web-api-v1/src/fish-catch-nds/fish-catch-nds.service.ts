import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FishCatchNdEntity } from './fish-catch-nds.entity';

@Injectable()
export class FishCatchNdService {
  constructor(
    @InjectRepository(FishCatchNdEntity)
    private fishCatchNdsRepository: Repository<FishCatchNdEntity>,
  ) {}

  findAll(): Promise<FishCatchNdEntity[]> {
    return this.fishCatchNdsRepository.find();
  }

  findOne(id: string): Promise<FishCatchNdEntity> {
    return this.fishCatchNdsRepository.findOneBy({ id });
  }
}
