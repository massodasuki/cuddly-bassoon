import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilePentadbirSklEntity } from './profile-pentadbir-skls.entity';

@Injectable()
export class ProfilePentadbirSklService {
  constructor(
    @InjectRepository(ProfilePentadbirSklEntity)
    private profilePentadbirSklsRepository: Repository<ProfilePentadbirSklEntity>,
  ) {}

  findAll(): Promise<ProfilePentadbirSklEntity[]> {
    return this.profilePentadbirSklsRepository.find();
  }

  async findOne(id: string): Promise<ProfilePentadbirSklEntity> {
    const entity = await this.profilePentadbirSklsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProfilePentadbirSklEntity with id ${id} not found`);
    }
    return entity;
  }
}

