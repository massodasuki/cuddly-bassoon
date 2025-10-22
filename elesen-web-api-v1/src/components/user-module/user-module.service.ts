import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModuleEntity } from './user-module.entity';

@Injectable()
export class UserModuleService {
  constructor(
    @InjectRepository(UserModuleEntity)
    private userModuleRepository: Repository<UserModuleEntity>,
  ) {}

  findAll(): Promise<UserModuleEntity[]> {
    return this.userModuleRepository.find();
  }

  async findOne(id: string): Promise<UserModuleEntity> {
    const entity = await this.userModuleRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`UserModuleEntity with id ${id} not found`);
    }
    return entity;
  }
}
