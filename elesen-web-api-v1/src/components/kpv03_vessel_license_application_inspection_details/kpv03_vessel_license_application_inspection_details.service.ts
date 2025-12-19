import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionDetailsEntity } from './kpv03_vessel_license_application_inspection_details.entity';
import { CreateKpv03VesselLicenseApplicationInspectionDetailsDto } from './dto/create-kpv03_vessel_license_application_inspection_details.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionDetailsDto } from './dto/update-kpv03_vessel_license_application_inspection_details.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionDetailsService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionDetailsEntity)
    private kpv03VesselLicenseApplicationInspectionDetailsRepository: Repository<Kpv03VesselLicenseApplicationInspectionDetailsEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionDetailsEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionDetailsRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionDetailsEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionDetailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionDetailsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionDetailsDto: CreateKpv03VesselLicenseApplicationInspectionDetailsDto): Promise<Kpv03VesselLicenseApplicationInspectionDetailsEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionDetailsRepository.create(createKpv03VesselLicenseApplicationInspectionDetailsDto);
    return this.kpv03VesselLicenseApplicationInspectionDetailsRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionDetailsDto: UpdateKpv03VesselLicenseApplicationInspectionDetailsDto): Promise<Kpv03VesselLicenseApplicationInspectionDetailsEntity> {
    await this.kpv03VesselLicenseApplicationInspectionDetailsRepository.update(id, updateKpv03VesselLicenseApplicationInspectionDetailsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionDetailsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionDetailsEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionDetailsRepository.find({
      where: { application_id: applicationId }
    });
  }
}