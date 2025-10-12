import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratUserEquipmentHistorieEntity> {
    return this.daratUserEquipmentHistoriesRepository.findOneBy({ id });
  }
}
