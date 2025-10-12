import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceListEntity } from './subsistence-list.entity';

@Injectable()
export class SubsistenceListEntityervice {
  constructor(
    @InjectRepository(SubsistenceListEntity)
    private subsistenceListRepository: Repository<SubsistenceListEntity>,
  ) {}

  findAll(): Promise<SubsistenceListEntity[]> {
    return this.subsistenceListRepository.find();
  }

  findOne(id: string): Promise<SubsistenceListEntity> {
    return this.subsistenceListRepository.findOneBy({ id });
  }
}
