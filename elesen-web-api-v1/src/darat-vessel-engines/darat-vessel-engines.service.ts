import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselEngineEntity } from './darat-vessel-engines.entity';

@Injectable()
export class DaratVesselEngineService {
  constructor(
    @InjectRepository(DaratVesselEngineEntity)
    private daratVesselEnginesRepository: Repository<DaratVesselEngineEntity>,
  ) {}

  findAll(): Promise<DaratVesselEngineEntity[]> {
    return this.daratVesselEnginesRepository.find();
  }

  findOne(id: string): Promise<DaratVesselEngineEntity> {
    return this.daratVesselEnginesRepository.findOneBy({ id });
  }
}
