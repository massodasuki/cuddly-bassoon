import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionVoyagesEntity } from './kpv03-vessel-license-application-inspection-voyages.entity';
import { CreateKpv03VesselLicenseApplicationInspectionVoyagesDto } from './dto/create-kpv03-vessel-license-application-inspection-voyages.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionVoyagesDto } from './dto/update-kpv03-vessel-license-application-inspection-voyages.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionVoyagesService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionVoyagesEntity)
    private kpv03VesselLicenseApplicationInspectionVoyagesRepository: Repository<Kpv03VesselLicenseApplicationInspectionVoyagesEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionVoyagesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionVoyagesEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionVoyagesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionVoyagesDto: CreateKpv03VesselLicenseApplicationInspectionVoyagesDto): Promise<Kpv03VesselLicenseApplicationInspectionVoyagesEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.create(createKpv03VesselLicenseApplicationInspectionVoyagesDto);
    return this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionVoyagesDto: UpdateKpv03VesselLicenseApplicationInspectionVoyagesDto): Promise<Kpv03VesselLicenseApplicationInspectionVoyagesEntity> {
    await this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.update(id, updateKpv03VesselLicenseApplicationInspectionVoyagesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionVoyagesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionVoyagesRepository.find({
      where: { application_id: applicationId }
    });
  }
}