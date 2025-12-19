import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './roles.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private rolesRepository: Repository<RoleEntity>,
  ) {}

  findAll(): Promise<RoleEntity[]> {
    return this.rolesRepository.find();
  }

  async findOne(id: string): Promise<RoleEntity> {
    const entity = await this.rolesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`RoleEntity with id ${id} not found`);
    }
    return entity;
  }
}
