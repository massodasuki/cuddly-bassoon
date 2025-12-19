import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseDocumentFilesEntity } from './vessel_license_document_files.entity';
import { CreateVesselLicenseDocumentFilesDto } from './dto/create-vessel_license_document_files.dto';
import { UpdateVesselLicenseDocumentFilesDto } from './dto/update-vessel_license_document_files.dto';

@Injectable()
export class VesselLicenseDocumentFilesService {
  constructor(
    @InjectRepository(VesselLicenseDocumentFilesEntity)
    private vesselLicenseDocumentFilesRepository: Repository<VesselLicenseDocumentFilesEntity>,
  ) {}

  findAll(): Promise<VesselLicenseDocumentFilesEntity[]> {
    return this.vesselLicenseDocumentFilesRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseDocumentFilesEntity> {
    const entity = await this.vesselLicenseDocumentFilesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseDocumentFilesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseDocumentFilesDto: CreateVesselLicenseDocumentFilesDto): Promise<VesselLicenseDocumentFilesEntity> {
    const entity = this.vesselLicenseDocumentFilesRepository.create(createVesselLicenseDocumentFilesDto);
    return this.vesselLicenseDocumentFilesRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseDocumentFilesDto: UpdateVesselLicenseDocumentFilesDto): Promise<VesselLicenseDocumentFilesEntity> {
    await this.vesselLicenseDocumentFilesRepository.update(id, updateVesselLicenseDocumentFilesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseDocumentFilesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseDocumentFilesEntity[]> {
    return this.vesselLicenseDocumentFilesRepository.find({
      where: { application_id: applicationId }
    });
  }
}