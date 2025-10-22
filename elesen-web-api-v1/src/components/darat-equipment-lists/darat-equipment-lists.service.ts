import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratEquipmentListEntity } from './darat-equipment-lists.entity';

@Injectable()
export class DaratEquipmentListService {
  constructor(
    @InjectRepository(DaratEquipmentListEntity)
    private daratEquipmentListsRepository: Repository<DaratEquipmentListEntity>,
  ) {}

  findAll(): Promise<DaratEquipmentListEntity[]> {
    return this.daratEquipmentListsRepository.find();
  }

  async findOne(id: string): Promise<DaratEquipmentListEntity> {
    const entity = await this.daratEquipmentListsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
