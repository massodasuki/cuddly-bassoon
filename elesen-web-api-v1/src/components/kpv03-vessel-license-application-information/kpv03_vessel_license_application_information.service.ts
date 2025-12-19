import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInformationEntity } from './kpv03_vessel_license_application_information.entity';
import { CreateKpv03VesselLicenseApplicationInformationDto } from './dto/create-kpv03_vessel_license_application_information.dto';
import { UpdateKpv03VesselLicenseApplicationInformationDto } from './dto/update-kpv03_vessel_license_application_information.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInformationService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInformationEntity)
    private kpv03VesselLicenseApplicationInformationRepository: Repository<Kpv03VesselLicenseApplicationInformationEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInformationEntity[]> {
    return this.kpv03VesselLicenseApplicationInformationRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInformationEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInformationRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInformationEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInformationDto: CreateKpv03VesselLicenseApplicationInformationDto): Promise<Kpv03VesselLicenseApplicationInformationEntity> {
    const entity = this.kpv03VesselLicenseApplicationInformationRepository.create(createKpv03VesselLicenseApplicationInformationDto);
    return this.kpv03VesselLicenseApplicationInformationRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInformationDto: UpdateKpv03VesselLicenseApplicationInformationDto): Promise<Kpv03VesselLicenseApplicationInformationEntity> {
    await this.kpv03VesselLicenseApplicationInformationRepository.update(id, updateKpv03VesselLicenseApplicationInformationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInformationRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInformationEntity[]> {
    return this.kpv03VesselLicenseApplicationInformationRepository.find({
      where: { application_id: applicationId }
    });
  }
}