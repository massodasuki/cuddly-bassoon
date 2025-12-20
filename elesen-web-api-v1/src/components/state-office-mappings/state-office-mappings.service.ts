import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateOfficeMappingEntity } from './state-office-mappings.entity';

@Injectable()
export class StateOfficeMappingService {
  constructor(
    @InjectRepository(StateOfficeMappingEntity)
    private stateOfficeMappingsRepository: Repository<StateOfficeMappingEntity>,
  ) {}

  findAll(): Promise<StateOfficeMappingEntity[]> {
    return this.stateOfficeMappingsRepository.find();
  }

  async findOne(id: string): Promise<StateOfficeMappingEntity> {
    const entity = await this.stateOfficeMappingsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`StateOfficeMappingEntity with id ${id} not found`);
    }
    return entity;
  }
}

