import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ProfilePentadbirHartaEntity> {
    const entity = await this.profilePentadbirHartasRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProfilePentadbirHartaEntity with id ${id} not found`);
    }
    return entity;
  }
}
