import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ProfileUserEntity> {
    return this.profileUsersRepository.findOneBy({ id });
  }
}
