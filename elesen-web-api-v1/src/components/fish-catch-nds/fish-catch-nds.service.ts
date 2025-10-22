import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<FishCatchNdEntity> {
    const entity = await this.fishCatchNdsRepository.findOneBy({ fish_catch_id: id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
