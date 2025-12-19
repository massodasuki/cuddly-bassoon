import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselHullEntity } from './darat-vessel-hulls.entity';

@Injectable()
export class DaratVesselHullService {
  constructor(
    @InjectRepository(DaratVesselHullEntity)
    private daratVesselHullsRepository: Repository<DaratVesselHullEntity>,
  ) {}

  findAll(): Promise<DaratVesselHullEntity[]> {
    return this.daratVesselHullsRepository.find();
  }

  async findOne(id: string): Promise<DaratVesselHullEntity> {
    const entity = await this.daratVesselHullsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
