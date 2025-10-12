import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ProfilePentadbirSklEntity> {
    return this.profilePentadbirSklsRepository.findOneBy({ id });
  }
}
