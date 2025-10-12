import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<StateOfficeMappingEntity> {
    return this.stateOfficeMappingsRepository.findOneBy({ id });
  }
}
