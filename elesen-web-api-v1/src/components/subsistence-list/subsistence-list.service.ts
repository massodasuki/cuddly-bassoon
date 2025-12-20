import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SubsistenceListEntity> {
    const entity = await this.subsistenceListRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceListEntity with id ${id} not found`);
    }
    return entity;
  }
}

