import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselHistorieEntity } from './darat-vessel-histories.entity';

@Injectable()
export class DaratVesselHistorieService {
  constructor(
    @InjectRepository(DaratVesselHistorieEntity)
    private daratVesselHistoriesRepository: Repository<DaratVesselHistorieEntity>,
  ) {}

  findAll(): Promise<DaratVesselHistorieEntity[]> {
    return this.daratVesselHistoriesRepository.find();
  }

  async findOne(id: string): Promise<DaratVesselHistorieEntity> {
    const entity = await this.daratVesselHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

