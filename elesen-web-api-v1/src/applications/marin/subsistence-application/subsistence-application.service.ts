import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceApplicationEntity } from './subsistence-application.entity';

@Injectable()
export class SubsistenceApplicationEntityervice {
  constructor(
    @InjectRepository(SubsistenceApplicationEntity)
    private subsistenceApplicationRepository: Repository<SubsistenceApplicationEntity>,
  ) {}

  findAll(): Promise<SubsistenceApplicationEntity[]> {
    return this.subsistenceApplicationRepository.find();
  }

  async findOne(id: string): Promise<SubsistenceApplicationEntity> {
    const entity = await this.subsistenceApplicationRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceApplicationEntity with id ${id} not found`);
    }
    return entity;
  }
}
