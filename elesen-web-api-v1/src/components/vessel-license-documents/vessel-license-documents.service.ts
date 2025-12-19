import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseDocumentsEntity } from './vessel-license-documents.entity';
import { CreateVesselLicenseDocumentsDto } from './dto/create-vessel-license-documents.dto';
import { UpdateVesselLicenseDocumentsDto } from './dto/update-vessel-license-documents.dto';

@Injectable()
export class VesselLicenseDocumentsService {
  constructor(
    @InjectRepository(VesselLicenseDocumentsEntity)
    private vesselLicenseDocumentsRepository: Repository<VesselLicenseDocumentsEntity>,
  ) {}

  findAll(): Promise<VesselLicenseDocumentsEntity[]> {
    return this.vesselLicenseDocumentsRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseDocumentsEntity> {
    const entity = await this.vesselLicenseDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseDocumentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseDocumentsDto: CreateVesselLicenseDocumentsDto): Promise<VesselLicenseDocumentsEntity> {
    const entity = this.vesselLicenseDocumentsRepository.create(createVesselLicenseDocumentsDto);
    return this.vesselLicenseDocumentsRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseDocumentsDto: UpdateVesselLicenseDocumentsDto): Promise<VesselLicenseDocumentsEntity> {
    await this.vesselLicenseDocumentsRepository.update(id, updateVesselLicenseDocumentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseDocumentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseDocumentsEntity[]> {
    return this.vesselLicenseDocumentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}