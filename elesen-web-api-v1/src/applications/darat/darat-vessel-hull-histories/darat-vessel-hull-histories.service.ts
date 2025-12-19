import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselHullHistorieEntity } from './darat-vessel-hull-histories.entity';

@Injectable()
export class DaratVesselHullHistorieService {
  constructor(
    @InjectRepository(DaratVesselHullHistorieEntity)
    private daratVesselHullHistoriesRepository: Repository<DaratVesselHullHistorieEntity>,
  ) {}

  findAll(): Promise<DaratVesselHullHistorieEntity[]> {
    return this.daratVesselHullHistoriesRepository.find();
  }

  async findOne(id: string): Promise<DaratVesselHullHistorieEntity> {
    const entity = await this.daratVesselHullHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
