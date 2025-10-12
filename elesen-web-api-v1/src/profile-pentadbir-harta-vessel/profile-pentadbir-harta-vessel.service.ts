import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilePentadbirHartaVesselEntity } from './profile-pentadbir-harta-vessel.entity';

@Injectable()
export class ProfilePentadbirHartaVesselService {
  constructor(
    @InjectRepository(ProfilePentadbirHartaVesselEntity)
    private profilePentadbirHartaVesselRepository: Repository<ProfilePentadbirHartaVesselEntity>,
  ) {}

  findAll(): Promise<ProfilePentadbirHartaVesselEntity[]> {
    return this.profilePentadbirHartaVesselRepository.find();
  }

  async findOne(id: string): Promise<ProfilePentadbirHartaVesselEntity> {
    const entity = await this.profilePentadbirHartaVesselRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProfilePentadbirHartaVessel with id ${id} not found`);
    }
    return entity;
  }
}
