import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ProfilePengusahaSklEntity> {
    return this.profilePengusahaSklsRepository.findOneBy({ id });
  }
}
