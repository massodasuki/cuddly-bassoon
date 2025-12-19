import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationHistoriesEntity } from './kpv03-vessel-license-application-histories.entity';
import { CreateKpv03VesselLicenseApplicationHistoriesDto } from './dto/create-kpv03-vessel-license-application-histories.dto';
import { UpdateKpv03VesselLicenseApplicationHistoriesDto } from './dto/update-kpv03-vessel-license-application-histories.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationHistoriesService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationHistoriesEntity)
    private kpv03VesselLicenseApplicationHistoriesRepository: Repository<Kpv03VesselLicenseApplicationHistoriesEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationHistoriesEntity[]> {
    return this.kpv03VesselLicenseApplicationHistoriesRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationHistoriesEntity> {
    const entity = await this.kpv03VesselLicenseApplicationHistoriesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationHistoriesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationHistoriesDto: CreateKpv03VesselLicenseApplicationHistoriesDto): Promise<Kpv03VesselLicenseApplicationHistoriesEntity> {
    const entity = this.kpv03VesselLicenseApplicationHistoriesRepository.create(createKpv03VesselLicenseApplicationHistoriesDto);
    return this.kpv03VesselLicenseApplicationHistoriesRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationHistoriesDto: UpdateKpv03VesselLicenseApplicationHistoriesDto): Promise<Kpv03VesselLicenseApplicationHistoriesEntity> {
    await this.kpv03VesselLicenseApplicationHistoriesRepository.update(id, updateKpv03VesselLicenseApplicationHistoriesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationHistoriesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationHistoriesEntity[]> {
    return this.kpv03VesselLicenseApplicationHistoriesRepository.find({
      where: { application_id: applicationId }
    });
  }
}