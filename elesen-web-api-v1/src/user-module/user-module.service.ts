import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModuleEntity } from './user-module.entity';

@Injectable()
export class UserModuleEntityervice {
  constructor(
    @InjectRepository(UserModuleEntity)
    private userModuleRepository: Repository<UserModuleEntity>,
  ) {}

  findAll(): Promise<UserModuleEntity[]> {
    return this.userModuleRepository.find();
  }

  findOne(id: string): Promise<UserModuleEntity> {
    return this.userModuleRepository.findOneBy({ id });
  }
}
