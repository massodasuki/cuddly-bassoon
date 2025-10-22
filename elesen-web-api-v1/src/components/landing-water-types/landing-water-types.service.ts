import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingWaterTypeEntity } from './landing-water-types.entity';

@Injectable()
export class LandingWaterTypeService {
  constructor(
    @InjectRepository(LandingWaterTypeEntity)
    private landingWaterTypesRepository: Repository<LandingWaterTypeEntity>,
  ) {}

  findAll(): Promise<LandingWaterTypeEntity[]> {
    return this.landingWaterTypesRepository.find();
  }

  async findOne(id: string): Promise<LandingWaterTypeEntity> {
    const entity = await this.landingWaterTypesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
