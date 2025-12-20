import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceListHqEntity } from './subsistence-list-hqs.entity';

@Injectable()
export class SubsistenceListHqService {
  constructor(
    @InjectRepository(SubsistenceListHqEntity)
    private subsistenceListHqsRepository: Repository<SubsistenceListHqEntity>,
  ) {}

  findAll(): Promise<SubsistenceListHqEntity[]> {
    return this.subsistenceListHqsRepository.find();
  }

  async findOne(id: string): Promise<SubsistenceListHqEntity> {
    const entity = await this.subsistenceListHqsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceListHqEntity with id ${id} not found`);
    }
    return entity;
  }
}

