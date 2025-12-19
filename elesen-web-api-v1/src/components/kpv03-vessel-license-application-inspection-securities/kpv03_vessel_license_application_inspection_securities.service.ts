import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesEntity } from './kpv03_vessel_license_application_inspection_securities.entity';
import { CreateKpv03VesselLicenseApplicationInspectionSecuritiesDto } from './dto/create-kpv03_vessel_license_application_inspection_securities.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionSecuritiesDto } from './dto/update-kpv03_vessel_license_application_inspection_securities.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionSecuritiesService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionSecuritiesEntity)
    private kpv03VesselLicenseApplicationInspectionSecuritiesRepository: Repository<Kpv03VesselLicenseApplicationInspectionSecuritiesEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionSecuritiesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionSecuritiesEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionSecuritiesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionSecuritiesDto: CreateKpv03VesselLicenseApplicationInspectionSecuritiesDto): Promise<Kpv03VesselLicenseApplicationInspectionSecuritiesEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.create(createKpv03VesselLicenseApplicationInspectionSecuritiesDto);
    return this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionSecuritiesDto: UpdateKpv03VesselLicenseApplicationInspectionSecuritiesDto): Promise<Kpv03VesselLicenseApplicationInspectionSecuritiesEntity> {
    await this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.update(id, updateKpv03VesselLicenseApplicationInspectionSecuritiesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionSecuritiesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionSecuritiesRepository.find({
      where: { application_id: applicationId }
    });
  }
}