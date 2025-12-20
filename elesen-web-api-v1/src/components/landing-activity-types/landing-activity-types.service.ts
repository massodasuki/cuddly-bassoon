import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingActivityTypeEntity } from './landing-activity-types.entity';

@Injectable()
export class LandingActivityTypeService {
  constructor(
    @InjectRepository(LandingActivityTypeEntity)
    private landingActivityTypesRepository: Repository<LandingActivityTypeEntity>,
  ) {}

  findAll(): Promise<LandingActivityTypeEntity[]> {
    return this.landingActivityTypesRepository.find();
  }

  async findOne(id: string): Promise<LandingActivityTypeEntity> {
    const entity = await this.landingActivityTypesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

