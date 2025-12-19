import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationInspectionItemsEntity } from './kpv03_vessel_license_application_inspection_items.entity';
import { CreateKpv03VesselLicenseApplicationInspectionItemsDto } from './dto/create-kpv03_vessel_license_application_inspection_items.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionItemsDto } from './dto/update-kpv03_vessel_license_application_inspection_items.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationInspectionItemsService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationInspectionItemsEntity)
    private kpv03VesselLicenseApplicationInspectionItemsRepository: Repository<Kpv03VesselLicenseApplicationInspectionItemsEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationInspectionItemsEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionItemsRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationInspectionItemsEntity> {
    const entity = await this.kpv03VesselLicenseApplicationInspectionItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationInspectionItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationInspectionItemsDto: CreateKpv03VesselLicenseApplicationInspectionItemsDto): Promise<Kpv03VesselLicenseApplicationInspectionItemsEntity> {
    const entity = this.kpv03VesselLicenseApplicationInspectionItemsRepository.create(createKpv03VesselLicenseApplicationInspectionItemsDto);
    return this.kpv03VesselLicenseApplicationInspectionItemsRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationInspectionItemsDto: UpdateKpv03VesselLicenseApplicationInspectionItemsDto): Promise<Kpv03VesselLicenseApplicationInspectionItemsEntity> {
    await this.kpv03VesselLicenseApplicationInspectionItemsRepository.update(id, updateKpv03VesselLicenseApplicationInspectionItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationInspectionItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationInspectionItemsEntity[]> {
    return this.kpv03VesselLicenseApplicationInspectionItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}