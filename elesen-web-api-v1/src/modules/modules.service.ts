import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModuleEntity } from './modules.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleEntity)
    private modulesRepository: Repository<ModuleEntity>,
  ) {}

  findAll(): Promise<ModuleEntity[]> {
    return this.modulesRepository.find();
  }

  findOne(id: string): Promise<ModuleEntity> {
    return this.modulesRepository.findOneBy({ id });
  }
}
