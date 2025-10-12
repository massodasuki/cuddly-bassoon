import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratEquipmentListEntity> {
    return this.daratEquipmentListsRepository.findOneBy({ id });
  }
}
