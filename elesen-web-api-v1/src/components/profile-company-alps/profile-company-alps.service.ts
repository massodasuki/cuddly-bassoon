import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ProfileCompanyAlpEntity> {
    const entity = await this.profileCompanyAlpsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

