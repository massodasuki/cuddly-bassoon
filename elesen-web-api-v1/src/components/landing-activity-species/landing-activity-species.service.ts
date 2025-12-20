import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingActivitySpecieEntity } from './landing-activity-species.entity';

@Injectable()
export class LandingActivitySpecieService {
  constructor(
    @InjectRepository(LandingActivitySpecieEntity)
    private landingActivitySpeciesRepository: Repository<LandingActivitySpecieEntity>,
  ) {}

  findAll(): Promise<LandingActivitySpecieEntity[]> {
    return this.landingActivitySpeciesRepository.find();
  }

  async findOne(id: string): Promise<LandingActivitySpecieEntity> {
    const entity = await this.landingActivitySpeciesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

