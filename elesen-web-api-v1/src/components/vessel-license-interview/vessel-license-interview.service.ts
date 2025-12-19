import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseInterviewEntity } from './vessel-license-interview.entity';
import { CreateVesselLicenseInterviewDto } from './dto/create-vessel-license-interview.dto';
import { UpdateVesselLicenseInterviewDto } from './dto/update-vessel-license-interview.dto';

@Injectable()
export class VesselLicenseInterviewService {
  constructor(
    @InjectRepository(VesselLicenseInterviewEntity)
    private vesselLicenseInterviewRepository: Repository<VesselLicenseInterviewEntity>,
  ) {}

  findAll(): Promise<VesselLicenseInterviewEntity[]> {
    return this.vesselLicenseInterviewRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseInterviewEntity> {
    const entity = await this.vesselLicenseInterviewRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseInterviewEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseInterviewDto: CreateVesselLicenseInterviewDto): Promise<VesselLicenseInterviewEntity> {
    const entity = this.vesselLicenseInterviewRepository.create(createVesselLicenseInterviewDto);
    return this.vesselLicenseInterviewRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseInterviewDto: UpdateVesselLicenseInterviewDto): Promise<VesselLicenseInterviewEntity> {
    await this.vesselLicenseInterviewRepository.update(id, updateVesselLicenseInterviewDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseInterviewRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseInterviewEntity[]> {
    return this.vesselLicenseInterviewRepository.find({
      where: { application_id: applicationId }
    });
  }
}