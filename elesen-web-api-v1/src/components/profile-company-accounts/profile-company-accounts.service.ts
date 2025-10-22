import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileCompanyAccountEntity } from './profile-company-accounts.entity';

@Injectable()
export class ProfileCompanyAccountService {
  constructor(
    @InjectRepository(ProfileCompanyAccountEntity)
    private profileCompanyAccountsRepository: Repository<ProfileCompanyAccountEntity>,
  ) {}

  findAll(): Promise<ProfileCompanyAccountEntity[]> {
    return this.profileCompanyAccountsRepository.find();
  }

  async findOne(id: string): Promise<ProfileCompanyAccountEntity> {
    const entity = await this.profileCompanyAccountsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
