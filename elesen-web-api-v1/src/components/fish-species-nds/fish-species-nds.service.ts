import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FishSpeciesNdEntity } from './fish-species-nds.entity';

@Injectable()
export class FishSpeciesNdService {
  constructor(
    @InjectRepository(FishSpeciesNdEntity)
    private fishSpeciesNdsRepository: Repository<FishSpeciesNdEntity>,
  ) {}

  findAll(): Promise<FishSpeciesNdEntity[]> {
    return this.fishSpeciesNdsRepository.find();
  }

  async findOne(id: string): Promise<FishSpeciesNdEntity> {
    const entity = await this.fishSpeciesNdsRepository.findOneBy({ fish_species_id: id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

