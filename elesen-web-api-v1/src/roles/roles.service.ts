import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<RoleEntity> {
    return this.rolesRepository.findOneBy({ id });
  }
}
