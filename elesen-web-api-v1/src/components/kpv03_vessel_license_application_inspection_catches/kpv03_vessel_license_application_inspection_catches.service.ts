import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionCatchesEntity } from './kpv03_vessel_license_application_inspection_catches.entity';
import { CreateKpv03VesselLicenseApplicationInspectionCatchesDto } from './dto/create-kpv03_vessel_license_application_inspection_catches.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionCatchesDto } from './dto/update-kpv03_vessel_license_application_inspection_catches.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionCatchesService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionCatchesEntity)
    private kpv03VesselLicenseApplicationInspectionCatchesRepository: Repository<Kpv03VesselLicenseApplicationInspectionCatchesEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionCatchesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionCatchesRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionCatchesEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionCatchesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionCatchesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionCatchesDto: CreateKpv03VesselLicenseApplicationInspectionCatchesDto): Promise<Kpv03VesselLicenseApplicationInspectionCatchesEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionCatchesRepository.create(createKpv03VesselLicenseApplicationInspectionCatchesDto);
    return this.kpv03VesselLicenseApplicationInspectionCatchesRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionCatchesDto: UpdateKpv03VesselLicenseApplicationInspectionCatchesDto): Promise<Kpv03VesselLicenseApplicationInspectionCatchesEntity> {
    await this.kpv03VesselLicenseApplicationInspectionCatchesRepository.update(id, updateKpv03VesselLicenseApplicationInspectionCatchesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionCatchesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionCatchesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionCatchesRepository.find({
      where: { application_id: applicationId }
    });
  }
}