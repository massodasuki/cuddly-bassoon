import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilePentadbirHartaVesselEntity } from './profile-pentadbir-harta-vessel.entity';

@Injectable()
export class ProfilePentadbirHartaVesselEntityervice {
  constructor(
    @InjectRepository(ProfilePentadbirHartaVesselEntity)
    private profilePentadbirHartaVesselRepository: Repository<ProfilePentadbirHartaVesselEntity>,
  ) {}

  findAll(): Promise<ProfilePentadbirHartaVesselEntity[]> {
    return this.profilePentadbirHartaVesselRepository.find();
  }

  findOne(id: string): Promise<ProfilePentadbirHartaVesselEntity> {
    return this.profilePentadbirHartaVesselRepository.findOneBy({ id });
  }
}
