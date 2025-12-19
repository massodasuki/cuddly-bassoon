import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationFinancesEntity } from './kpv03_vessel_license_application_finances.entity';
import { CreateKpv03VesselLicenseApplicationFinancesDto } from './dto/create-kpv03_vessel_license_application_finances.dto';
import { UpdateKpv03VesselLicenseApplicationFinancesDto } from './dto/update-kpv03_vessel_license_application_finances.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationFinancesService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationFinancesEntity)
    private kpv03VesselLicenseApplicationFinancesRepository: Repository<Kpv03VesselLicenseApplicationFinancesEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationFinancesEntity[]> {
    return this.kpv03VesselLicenseApplicationFinancesRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationFinancesEntity> {
    const entity = await this.kpv03VesselLicenseApplicationFinancesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationFinancesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationFinancesDto: CreateKpv03VesselLicenseApplicationFinancesDto): Promise<Kpv03VesselLicenseApplicationFinancesEntity> {
    const entity = this.kpv03VesselLicenseApplicationFinancesRepository.create(createKpv03VesselLicenseApplicationFinancesDto);
    return this.kpv03VesselLicenseApplicationFinancesRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationFinancesDto: UpdateKpv03VesselLicenseApplicationFinancesDto): Promise<Kpv03VesselLicenseApplicationFinancesEntity> {
    await this.kpv03VesselLicenseApplicationFinancesRepository.update(id, updateKpv03VesselLicenseApplicationFinancesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationFinancesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationFinancesEntity[]> {
    return this.kpv03VesselLicenseApplicationFinancesRepository.find({
      where: { application_id: applicationId }
    });
  }
}