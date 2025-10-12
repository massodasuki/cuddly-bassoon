import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoleEntity } from './user-role.entity';

@Injectable()
export class UserRoleEntityervice {
  constructor(
    @InjectRepository(UserRoleEntity)
    private userRoleRepository: Repository<UserRoleEntity>,
  ) {}

  findAll(): Promise<UserRoleEntity[]> {
    return this.userRoleRepository.find();
  }

  findOne(id: string): Promise<UserRoleEntity> {
    return this.userRoleRepository.findOneBy({ id });
  }
}
