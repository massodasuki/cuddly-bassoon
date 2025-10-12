import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselInspectionEntity } from './darat-vessel-inspections.entity';

@Injectable()
export class DaratVesselInspectionService {
  constructor(
    @InjectRepository(DaratVesselInspectionEntity)
    private daratVesselInspectionsRepository: Repository<DaratVesselInspectionEntity>,
  ) {}

  findAll(): Promise<DaratVesselInspectionEntity[]> {
    return this.daratVesselInspectionsRepository.find();
  }

  findOne(id: string): Promise<DaratVesselInspectionEntity> {
    return this.daratVesselInspectionsRepository.findOneBy({ id });
  }
}
