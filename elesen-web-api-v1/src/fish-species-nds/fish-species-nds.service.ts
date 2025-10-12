import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<FishSpeciesNdEntity> {
    return this.fishSpeciesNdsRepository.findOneBy({ id });
  }
}
