import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseShareholdersEntity } from './vessel_license_shareholders.entity';
import { CreateVesselLicenseShareholdersDto } from './dto/create-vessel_license_shareholders.dto';
import { UpdateVesselLicenseShareholdersDto } from './dto/update-vessel_license_shareholders.dto';

@Injectable()
export class VesselLicenseShareholdersService {
  constructor(
    @InjectRepository(VesselLicenseShareholdersEntity)
    private vesselLicenseShareholdersRepository: Repository<VesselLicenseShareholdersEntity>,
  ) {}

  findAll(): Promise<VesselLicenseShareholdersEntity[]> {
    return this.vesselLicenseShareholdersRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseShareholdersEntity> {
    const entity = await this.vesselLicenseShareholdersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseShareholdersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseShareholdersDto: CreateVesselLicenseShareholdersDto): Promise<VesselLicenseShareholdersEntity> {
    const entity = this.vesselLicenseShareholdersRepository.create(createVesselLicenseShareholdersDto);
    return this.vesselLicenseShareholdersRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseShareholdersDto: UpdateVesselLicenseShareholdersDto): Promise<VesselLicenseShareholdersEntity> {
    await this.vesselLicenseShareholdersRepository.update(id, updateVesselLicenseShareholdersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseShareholdersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseShareholdersEntity[]> {
    return this.vesselLicenseShareholdersRepository.find({
      where: { application_id: applicationId }
    });
  }
}