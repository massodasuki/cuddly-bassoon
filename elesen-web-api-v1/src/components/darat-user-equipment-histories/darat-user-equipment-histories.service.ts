import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratUserEquipmentHistorieEntity } from './darat-user-equipment-histories.entity';

@Injectable()
export class DaratUserEquipmentHistorieService {
  constructor(
    @InjectRepository(DaratUserEquipmentHistorieEntity)
    private daratUserEquipmentHistoriesRepository: Repository<DaratUserEquipmentHistorieEntity>,
  ) {}

  findAll(): Promise<DaratUserEquipmentHistorieEntity[]> {
    return this.daratUserEquipmentHistoriesRepository.find();
  }

  async findOne(id: string): Promise<DaratUserEquipmentHistorieEntity> {
    const entity = await this.daratUserEquipmentHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

