import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratVesselHullEntity> {
    return this.daratVesselHullsRepository.findOneBy({ id });
  }
}
