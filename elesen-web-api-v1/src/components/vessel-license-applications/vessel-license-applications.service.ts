import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseApplicationsEntity } from './vessel-license-applications.entity';
import { CreateVesselLicenseApplicationsDto } from './dto/create-vessel-license-applications.dto';
import { UpdateVesselLicenseApplicationsDto } from './dto/update-vessel-license-applications.dto';

@Injectable()
export class VesselLicenseApplicationsService {
  constructor(
    @InjectRepository(VesselLicenseApplicationsEntity)
    private vesselLicenseApplicationsRepository: Repository<VesselLicenseApplicationsEntity>,
  ) {}

  findAll(): Promise<VesselLicenseApplicationsEntity[]> {
    return this.vesselLicenseApplicationsRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseApplicationsEntity> {
    const entity = await this.vesselLicenseApplicationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseApplicationsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseApplicationsDto: CreateVesselLicenseApplicationsDto): Promise<VesselLicenseApplicationsEntity> {
    const entity = this.vesselLicenseApplicationsRepository.create(createVesselLicenseApplicationsDto);
    return this.vesselLicenseApplicationsRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseApplicationsDto: UpdateVesselLicenseApplicationsDto): Promise<VesselLicenseApplicationsEntity> {
    await this.vesselLicenseApplicationsRepository.update(id, updateVesselLicenseApplicationsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseApplicationsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseApplicationsEntity[]> {
    return this.vesselLicenseApplicationsRepository.find({
      where: { application_id: applicationId }
    });
  }
}