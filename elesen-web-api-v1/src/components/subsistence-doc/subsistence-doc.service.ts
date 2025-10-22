import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceDocEntity } from './subsistence-doc.entity';

@Injectable()
export class SubsistenceDocEntityervice {
  constructor(
    @InjectRepository(SubsistenceDocEntity)
    private subsistenceDocRepository: Repository<SubsistenceDocEntity>,
  ) {}

  findAll(): Promise<SubsistenceDocEntity[]> {
    return this.subsistenceDocRepository.find();
  }

  async findOne(id: string): Promise<SubsistenceDocEntity> {
    const entity = await this.subsistenceDocRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceDocEntity with id ${id} not found`);
    }
    return entity;
  }
}
