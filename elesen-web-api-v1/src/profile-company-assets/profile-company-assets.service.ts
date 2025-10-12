import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<ProfileCompanyAssetEntity> {
    const entity = await this.profileCompanyAssetsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProfileCompanyAssetEntity with id ${id} not found`);
    }
    return entity;
  }
}
