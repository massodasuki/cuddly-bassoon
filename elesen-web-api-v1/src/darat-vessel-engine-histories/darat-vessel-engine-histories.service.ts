import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselEngineHistorieEntity } from './darat-vessel-engine-histories.entity';

@Injectable()
export class DaratVesselEngineHistorieService {
  constructor(
    @InjectRepository(DaratVesselEngineHistorieEntity)
    private daratVesselEngineHistoriesRepository: Repository<DaratVesselEngineHistorieEntity>,
  ) {}

  findAll(): Promise<DaratVesselEngineHistorieEntity[]> {
    return this.daratVesselEngineHistoriesRepository.find();
  }

  findOne(id: string): Promise<DaratVesselEngineHistorieEntity> {
    return this.daratVesselEngineHistoriesRepository.findOneBy({ id });
  }
}
