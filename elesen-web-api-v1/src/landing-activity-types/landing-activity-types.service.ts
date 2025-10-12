import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<LandingActivityTypeEntity> {
    return this.landingActivityTypesRepository.findOneBy({ id });
  }
}
