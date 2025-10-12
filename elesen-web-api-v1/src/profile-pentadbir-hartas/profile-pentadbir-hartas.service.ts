import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilePentadbirHartaEntity } from './profile-pentadbir-hartas.entity';

@Injectable()
export class ProfilePentadbirHartaService {
  constructor(
    @InjectRepository(ProfilePentadbirHartaEntity)
    private profilePentadbirHartasRepository: Repository<ProfilePentadbirHartaEntity>,
  ) {}

  findAll(): Promise<ProfilePentadbirHartaEntity[]> {
    return this.profilePentadbirHartasRepository.find();
  }

  findOne(id: string): Promise<ProfilePentadbirHartaEntity> {
    return this.profilePentadbirHartasRepository.findOneBy({ id });
  }
}
