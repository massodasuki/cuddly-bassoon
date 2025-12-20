import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUserEntity } from './profile-users.entity';

@Injectable()
export class ProfileUserService {
  constructor(
    @InjectRepository(ProfileUserEntity)
    private profileUsersRepository: Repository<ProfileUserEntity>,
  ) {}

  findAll(): Promise<ProfileUserEntity[]> {
    return this.profileUsersRepository.find();
  }

  async findOne(id: string): Promise<ProfileUserEntity> {
    const entity = await this.profileUsersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProfileUserEntity with id ${id} not found`);
    }
    return entity;
  }
}

