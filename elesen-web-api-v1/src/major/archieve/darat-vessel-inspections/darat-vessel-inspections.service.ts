import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<DaratVesselInspectionEntity> {
    const entity = await this.daratVesselInspectionsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
