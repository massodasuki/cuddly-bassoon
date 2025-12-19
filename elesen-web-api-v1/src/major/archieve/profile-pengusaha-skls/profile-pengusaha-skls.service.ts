import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilePengusahaSklEntity } from './profile-pengusaha-skls.entity';

@Injectable()
export class ProfilePengusahaSklService {
  constructor(
    @InjectRepository(ProfilePengusahaSklEntity)
    private profilePengusahaSklsRepository: Repository<ProfilePengusahaSklEntity>,
  ) {}

  findAll(): Promise<ProfilePengusahaSklEntity[]> {
    return this.profilePengusahaSklsRepository.find();
  }

  async findOne(id: string): Promise<ProfilePengusahaSklEntity> {
    const entity = await this.profilePengusahaSklsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProfilePengusahaSklEntity with id ${id} not found`);
    }
    return entity;
  }
}
