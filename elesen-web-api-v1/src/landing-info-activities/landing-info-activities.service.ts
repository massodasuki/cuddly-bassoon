import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<LandingInfoActivitieEntity> {
    return this.landingInfoActivitiesRepository.findOneBy({ id });
  }
}
