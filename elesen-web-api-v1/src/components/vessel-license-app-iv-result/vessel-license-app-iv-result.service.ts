import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseAppIvResultEntity } from './vessel-license-app-iv-result.entity';
import { CreateVesselLicenseAppIvResultDto } from './dto/create-vessel-license-app-iv-result.dto';
import { UpdateVesselLicenseAppIvResultDto } from './dto/update-vessel-license-app-iv-result.dto';

@Injectable()
export class VesselLicenseAppIvResultService {
  constructor(
    @InjectRepository(VesselLicenseAppIvResultEntity)
    private vesselLicenseAppIvResultRepository: Repository<VesselLicenseAppIvResultEntity>,
  ) {}

  findAll(): Promise<VesselLicenseAppIvResultEntity[]> {
    return this.vesselLicenseAppIvResultRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseAppIvResultEntity> {
    const entity = await this.vesselLicenseAppIvResultRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseAppIvResultEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseAppIvResultDto: CreateVesselLicenseAppIvResultDto): Promise<VesselLicenseAppIvResultEntity> {
    const entity = this.vesselLicenseAppIvResultRepository.create(createVesselLicenseAppIvResultDto);
    return this.vesselLicenseAppIvResultRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseAppIvResultDto: UpdateVesselLicenseAppIvResultDto): Promise<VesselLicenseAppIvResultEntity> {
    await this.vesselLicenseAppIvResultRepository.update(id, updateVesselLicenseAppIvResultDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseAppIvResultRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseAppIvResultEntity[]> {
    return this.vesselLicenseAppIvResultRepository.find({
      where: { application_id: applicationId }
    });
  }
}