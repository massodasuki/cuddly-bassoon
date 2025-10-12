import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileCompanieEntity } from './profile-companies.entity';

@Injectable()
export class ProfileCompanieService {
  constructor(
    @InjectRepository(ProfileCompanieEntity)
    private profileCompaniesRepository: Repository<ProfileCompanieEntity>,
  ) {}

  findAll(): Promise<ProfileCompanieEntity[]> {
    return this.profileCompaniesRepository.find();
  }

  findOne(id: string): Promise<ProfileCompanieEntity> {
    return this.profileCompaniesRepository.findOneBy({ id });
  }
}
