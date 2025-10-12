import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ModuleEntity> {
    const entity = await this.modulesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
