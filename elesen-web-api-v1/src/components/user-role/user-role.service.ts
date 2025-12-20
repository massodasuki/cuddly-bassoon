import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleEntity } from './user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleEntity)
    private userRoleRepository: Repository<UserRoleEntity>,
  ) {}

  findAll(): Promise<UserRoleEntity[]> {
    return this.userRoleRepository.find();
  }

  async findOne(id: string): Promise<UserRoleEntity> {
    const entity = await this.userRoleRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`UserRole with id ${id} not found`);
    }
    return entity;
  }
}

