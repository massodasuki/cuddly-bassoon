import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleModuleEntity } from './role-module.entity';

@Injectable()
export class RoleModuleEntityervice {
  constructor(
    @InjectRepository(RoleModuleEntity)
    private roleModuleRepository: Repository<RoleModuleEntity>,
  ) {}

  findAll(): Promise<RoleModuleEntity[]> {
    return this.roleModuleRepository.find();
  }

  async findOne(id: string): Promise<RoleModuleEntity> {
    const entity = await this.roleModuleRepository.findOneBy({ role_id: id });
    if (!entity) {
      throw new NotFoundException(`RoleModuleEntity with role_id ${id} not found`);
    }
    return entity;
  }
}

