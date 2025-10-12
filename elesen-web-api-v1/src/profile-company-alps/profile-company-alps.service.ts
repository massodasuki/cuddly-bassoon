import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileCompanyAlpEntity } from './profile-company-alps.entity';

@Injectable()
export class ProfileCompanyAlpService {
  constructor(
    @InjectRepository(ProfileCompanyAlpEntity)
    private profileCompanyAlpsRepository: Repository<ProfileCompanyAlpEntity>,
  ) {}

  findAll(): Promise<ProfileCompanyAlpEntity[]> {
    return this.profileCompanyAlpsRepository.find();
  }

  findOne(id: string): Promise<ProfileCompanyAlpEntity> {
    return this.profileCompanyAlpsRepository.findOneBy({ id });
  }
}
