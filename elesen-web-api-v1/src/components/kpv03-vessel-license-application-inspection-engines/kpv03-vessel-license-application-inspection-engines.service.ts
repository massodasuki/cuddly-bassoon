import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionEnginesEntity } from './kpv03-vessel-license-application-inspection-engines.entity';
import { CreateKpv03VesselLicenseApplicationInspectionEnginesDto } from './dto/create-kpv03-vessel-license-application-inspection-engines.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionEnginesDto } from './dto/update-kpv03-vessel-license-application-inspection-engines.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionEnginesService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionEnginesEntity)
    private kpv03VesselLicenseApplicationInspectionEnginesRepository: Repository<Kpv03VesselLicenseApplicationInspectionEnginesEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionEnginesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionEnginesRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionEnginesEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionEnginesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionEnginesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionEnginesDto: CreateKpv03VesselLicenseApplicationInspectionEnginesDto): Promise<Kpv03VesselLicenseApplicationInspectionEnginesEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionEnginesRepository.create(createKpv03VesselLicenseApplicationInspectionEnginesDto);
    return this.kpv03VesselLicenseApplicationInspectionEnginesRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionEnginesDto: UpdateKpv03VesselLicenseApplicationInspectionEnginesDto): Promise<Kpv03VesselLicenseApplicationInspectionEnginesEntity> {
    await this.kpv03VesselLicenseApplicationInspectionEnginesRepository.update(id, updateKpv03VesselLicenseApplicationInspectionEnginesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionEnginesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionEnginesEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionEnginesRepository.find({
      where: { application_id: applicationId }
    });
  }
}