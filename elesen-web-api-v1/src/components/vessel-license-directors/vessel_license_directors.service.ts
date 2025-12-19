import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseDirectorsEntity } from './vessel_license_directors.entity';
import { CreateVesselLicenseDirectorsDto } from './dto/create-vessel_license_directors.dto';
import { UpdateVesselLicenseDirectorsDto } from './dto/update-vessel_license_directors.dto';

@Injectable()
export class VesselLicenseDirectorsService {
  constructor(
    @InjectRepository(VesselLicenseDirectorsEntity)
    private vesselLicenseDirectorsRepository: Repository<VesselLicenseDirectorsEntity>,
  ) {}

  findAll(): Promise<VesselLicenseDirectorsEntity[]> {
    return this.vesselLicenseDirectorsRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseDirectorsEntity> {
    const entity = await this.vesselLicenseDirectorsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseDirectorsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseDirectorsDto: CreateVesselLicenseDirectorsDto): Promise<VesselLicenseDirectorsEntity> {
    const entity = this.vesselLicenseDirectorsRepository.create(createVesselLicenseDirectorsDto);
    return this.vesselLicenseDirectorsRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseDirectorsDto: UpdateVesselLicenseDirectorsDto): Promise<VesselLicenseDirectorsEntity> {
    await this.vesselLicenseDirectorsRepository.update(id, updateVesselLicenseDirectorsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseDirectorsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseDirectorsEntity[]> {
    return this.vesselLicenseDirectorsRepository.find({
      where: { application_id: applicationId }
    });
  }
}