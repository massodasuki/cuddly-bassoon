import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseApplicationTrailsEntity } from './vessel_license_application_trails.entity';
import { CreateVesselLicenseApplicationTrailsDto } from './dto/create-vessel_license_application_trails.dto';
import { UpdateVesselLicenseApplicationTrailsDto } from './dto/update-vessel_license_application_trails.dto';

@Injectable()
export class VesselLicenseApplicationTrailsService {
  constructor(
    @InjectRepository(VesselLicenseApplicationTrailsEntity)
    private vesselLicenseApplicationTrailsRepository: Repository<VesselLicenseApplicationTrailsEntity>,
  ) {}

  findAll(): Promise<VesselLicenseApplicationTrailsEntity[]> {
    return this.vesselLicenseApplicationTrailsRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseApplicationTrailsEntity> {
    const entity = await this.vesselLicenseApplicationTrailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseApplicationTrailsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseApplicationTrailsDto: CreateVesselLicenseApplicationTrailsDto): Promise<VesselLicenseApplicationTrailsEntity> {
    const entity = this.vesselLicenseApplicationTrailsRepository.create(createVesselLicenseApplicationTrailsDto);
    return this.vesselLicenseApplicationTrailsRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseApplicationTrailsDto: UpdateVesselLicenseApplicationTrailsDto): Promise<VesselLicenseApplicationTrailsEntity> {
    await this.vesselLicenseApplicationTrailsRepository.update(id, updateVesselLicenseApplicationTrailsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseApplicationTrailsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseApplicationTrailsEntity[]> {
    return this.vesselLicenseApplicationTrailsRepository.find({
      where: { application_id: applicationId }
    });
  }
}