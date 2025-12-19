import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<DaratVesselEngineEntity> {
    const entity = await this.daratVesselEnginesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
