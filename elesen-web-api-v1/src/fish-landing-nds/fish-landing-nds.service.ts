import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<FishLandingNdEntity> {
    const entity = await this.fishLandingNdsRepository.findOneBy({ fish_landing_id: id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
