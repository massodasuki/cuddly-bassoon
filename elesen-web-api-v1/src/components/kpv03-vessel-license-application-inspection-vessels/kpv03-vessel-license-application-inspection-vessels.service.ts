import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionVesselsEntity } from './kpv03-vessel-license-application-inspection-vessels.entity';
import { CreateKpv03VesselLicenseApplicationInspectionVesselsDto } from './dto/create-kpv03-vessel-license-application-inspection-vessels.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionVesselsDto } from './dto/update-kpv03-vessel-license-application-inspection-vessels.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionVesselsService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionVesselsEntity)
    private kpv03VesselLicenseApplicationInspectionVesselsRepository: Repository<Kpv03VesselLicenseApplicationInspectionVesselsEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionVesselsEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionVesselsRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionVesselsEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionVesselsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionVesselsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionVesselsDto: CreateKpv03VesselLicenseApplicationInspectionVesselsDto): Promise<Kpv03VesselLicenseApplicationInspectionVesselsEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionVesselsRepository.create(createKpv03VesselLicenseApplicationInspectionVesselsDto);
    return this.kpv03VesselLicenseApplicationInspectionVesselsRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionVesselsDto: UpdateKpv03VesselLicenseApplicationInspectionVesselsDto): Promise<Kpv03VesselLicenseApplicationInspectionVesselsEntity> {
    await this.kpv03VesselLicenseApplicationInspectionVesselsRepository.update(id, updateKpv03VesselLicenseApplicationInspectionVesselsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionVesselsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionVesselsEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionVesselsRepository.find({
      where: { application_id: applicationId }
    });
  }
}