import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<DaratUserEquipmentEntity> {
    const entity = await this.daratUserEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
