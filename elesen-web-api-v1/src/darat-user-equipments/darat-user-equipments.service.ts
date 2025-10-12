import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratUserEquipmentEntity } from './darat-user-equipments.entity';

@Injectable()
export class DaratUserEquipmentService {
  constructor(
    @InjectRepository(DaratUserEquipmentEntity)
    private daratUserEquipmentsRepository: Repository<DaratUserEquipmentEntity>,
  ) {}

  findAll(): Promise<DaratUserEquipmentEntity[]> {
    return this.daratUserEquipmentsRepository.find();
  }

  findOne(id: string): Promise<DaratUserEquipmentEntity> {
    return this.daratUserEquipmentsRepository.findOneBy({ id });
  }
}
