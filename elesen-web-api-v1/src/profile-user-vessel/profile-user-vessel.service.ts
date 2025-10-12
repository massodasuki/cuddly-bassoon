import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileUserVesselEntity } from './profile-user-vessel.entity';

@Injectable()
export class ProfileUserVesselEntityervice {
  constructor(
    @InjectRepository(ProfileUserVesselEntity)
    private profileUserVesselRepository: Repository<ProfileUserVesselEntity>,
  ) {}

  findAll(): Promise<ProfileUserVesselEntity[]> {
    return this.profileUserVesselRepository.find();
  }

  findOne(id: string): Promise<ProfileUserVesselEntity> {
    return this.profileUserVesselRepository.findOneBy({ id });
  }
}
