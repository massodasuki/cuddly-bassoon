import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingInfoActivitieEntity } from './landing-info-activities.entity';

@Injectable()
export class LandingInfoActivitieService {
  constructor(
    @InjectRepository(LandingInfoActivitieEntity)
    private landingInfoActivitiesRepository: Repository<LandingInfoActivitieEntity>,
  ) {}

  findAll(): Promise<LandingInfoActivitieEntity[]> {
    return this.landingInfoActivitiesRepository.find();
  }

  async findOne(id: string): Promise<LandingInfoActivitieEntity> {
    const entity = await this.landingInfoActivitiesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
