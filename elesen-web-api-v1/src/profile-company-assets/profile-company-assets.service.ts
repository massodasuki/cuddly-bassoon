import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileCompanyAssetEntity } from './profile-company-assets.entity';

@Injectable()
export class ProfileCompanyAssetService {
  constructor(
    @InjectRepository(ProfileCompanyAssetEntity)
    private profileCompanyAssetsRepository: Repository<ProfileCompanyAssetEntity>,
  ) {}

  findAll(): Promise<ProfileCompanyAssetEntity[]> {
    return this.profileCompanyAssetsRepository.find();
  }

  findOne(id: string): Promise<ProfileCompanyAssetEntity> {
    return this.profileCompanyAssetsRepository.findOneBy({ id });
  }
}
