import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselCompanyAssetsEntity } from './vessel-company-assets.entity';
import { CreateVesselCompanyAssetsDto } from './dto/create-vessel-company-assets.dto';
import { UpdateVesselCompanyAssetsDto } from './dto/update-vessel-company-assets.dto';

@Injectable()
export class VesselCompanyAssetsService {
  constructor(
    @InjectRepository(VesselCompanyAssetsEntity)
    private vesselCompanyAssetsRepository: Repository<VesselCompanyAssetsEntity>,
  ) {}

  findAll(): Promise<VesselCompanyAssetsEntity[]> {
    return this.vesselCompanyAssetsRepository.find();
  }

  async findOne(id: string): Promise<VesselCompanyAssetsEntity> {
    const entity = await this.vesselCompanyAssetsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselCompanyAssetsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselCompanyAssetsDto: CreateVesselCompanyAssetsDto): Promise<VesselCompanyAssetsEntity> {
    const entity = this.vesselCompanyAssetsRepository.create(createVesselCompanyAssetsDto);
    return this.vesselCompanyAssetsRepository.save(entity);
  }

  async update(id: string, updateVesselCompanyAssetsDto: UpdateVesselCompanyAssetsDto): Promise<VesselCompanyAssetsEntity> {
    await this.vesselCompanyAssetsRepository.update(id, updateVesselCompanyAssetsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselCompanyAssetsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselCompanyAssetsEntity[]> {
    return this.vesselCompanyAssetsRepository.find({
      where: { application_id: applicationId }
    });
  }
}