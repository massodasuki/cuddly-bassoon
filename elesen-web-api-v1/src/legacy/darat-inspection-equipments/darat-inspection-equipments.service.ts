import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratInspectionEquipmentEntity } from './darat-inspection-equipments.entity';

@Injectable()
export class DaratInspectionEquipmentService {
  constructor(
    @InjectRepository(DaratInspectionEquipmentEntity)
    private daratInspectionEquipmentsRepository: Repository<DaratInspectionEquipmentEntity>,
  ) {}

  findAll(): Promise<DaratInspectionEquipmentEntity[]> {
    return this.daratInspectionEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<DaratInspectionEquipmentEntity> {
    const entity = await this.daratInspectionEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

