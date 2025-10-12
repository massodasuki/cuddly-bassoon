import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ProfileCompanyAccountEntity> {
    return this.profileCompanyAccountsRepository.findOneBy({ id });
  }
}
