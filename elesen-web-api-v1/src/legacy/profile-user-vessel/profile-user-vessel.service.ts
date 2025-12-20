import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUserVesselEntity } from './profile-user-vessel.entity';

@Injectable()
export class ProfileUserVesselService {
  constructor(
    @InjectRepository(ProfileUserVesselEntity)
    private profileUserVesselRepository: Repository<ProfileUserVesselEntity>,
  ) {}

  findAll(): Promise<ProfileUserVesselEntity[]> {
    return this.profileUserVesselRepository.find();
  }

  async findOne(profile_user_id: string): Promise<ProfileUserVesselEntity> {
    const entity = await this.profileUserVesselRepository.findOneBy({ profile_user_id });
    if (!entity) {
      throw new NotFoundException(`ProfileUserVessel with id ${profile_user_id} not found`);
    }
    return entity;
  }
}

