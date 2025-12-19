import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseVesselsEntity } from './vessel_license_vessels.entity';
import { CreateVesselLicenseVesselsDto } from './dto/create-vessel_license_vessels.dto';
import { UpdateVesselLicenseVesselsDto } from './dto/update-vessel_license_vessels.dto';

@Injectable()
export class VesselLicenseVesselsService {
  constructor(
    @InjectRepository(VesselLicenseVesselsEntity)
    private vesselLicenseVesselsRepository: Repository<VesselLicenseVesselsEntity>,
  ) {}

  findAll(): Promise<VesselLicenseVesselsEntity[]> {
    return this.vesselLicenseVesselsRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseVesselsEntity> {
    const entity = await this.vesselLicenseVesselsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseVesselsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseVesselsDto: CreateVesselLicenseVesselsDto): Promise<VesselLicenseVesselsEntity> {
    const entity = this.vesselLicenseVesselsRepository.create(createVesselLicenseVesselsDto);
    return this.vesselLicenseVesselsRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseVesselsDto: UpdateVesselLicenseVesselsDto): Promise<VesselLicenseVesselsEntity> {
    await this.vesselLicenseVesselsRepository.update(id, updateVesselLicenseVesselsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseVesselsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseVesselsEntity[]> {
    return this.vesselLicenseVesselsRepository.find({
      where: { application_id: applicationId }
    });
  }
}