import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<RoleModuleEntity> {
    return this.roleModuleRepository.findOneBy({ id });
  }
}
