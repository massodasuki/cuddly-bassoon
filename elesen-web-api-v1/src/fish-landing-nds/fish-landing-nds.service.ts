import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FishLandingNdEntity } from './fish-landing-nds.entity';

@Injectable()
export class FishLandingNdService {
  constructor(
    @InjectRepository(FishLandingNdEntity)
    private fishLandingNdsRepository: Repository<FishLandingNdEntity>,
  ) {}

  findAll(): Promise<FishLandingNdEntity[]> {
    return this.fishLandingNdsRepository.find();
  }

  findOne(id: string): Promise<FishLandingNdEntity> {
    return this.fishLandingNdsRepository.findOneBy({ id });
  }
}
