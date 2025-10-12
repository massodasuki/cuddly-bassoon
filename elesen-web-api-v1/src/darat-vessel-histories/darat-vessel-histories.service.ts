import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratVesselHistorieEntity> {
    return this.daratVesselHistoriesRepository.findOneBy({ id });
  }
}
