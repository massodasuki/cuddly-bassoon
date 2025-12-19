import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationDirectorsEntity } from './kpv03-vessel-license-application-directors.entity';
import { CreateKpv03VesselLicenseApplicationDirectorsDto } from './dto/create-kpv03-vessel-license-application-directors.dto';
import { UpdateKpv03VesselLicenseApplicationDirectorsDto } from './dto/update-kpv03-vessel-license-application-directors.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationDirectorsService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationDirectorsEntity)
    private kpv03VesselLicenseApplicationDirectorsRepository: Repository<Kpv03VesselLicenseApplicationDirectorsEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationDirectorsEntity[]> {
    return this.kpv03VesselLicenseApplicationDirectorsRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationDirectorsEntity> {
    const entity = await this.kpv03VesselLicenseApplicationDirectorsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationDirectorsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationDirectorsDto: CreateKpv03VesselLicenseApplicationDirectorsDto): Promise<Kpv03VesselLicenseApplicationDirectorsEntity> {
    const entity = this.kpv03VesselLicenseApplicationDirectorsRepository.create(createKpv03VesselLicenseApplicationDirectorsDto);
    return this.kpv03VesselLicenseApplicationDirectorsRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationDirectorsDto: UpdateKpv03VesselLicenseApplicationDirectorsDto): Promise<Kpv03VesselLicenseApplicationDirectorsEntity> {
    await this.kpv03VesselLicenseApplicationDirectorsRepository.update(id, updateKpv03VesselLicenseApplicationDirectorsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationDirectorsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationDirectorsEntity[]> {
    return this.kpv03VesselLicenseApplicationDirectorsRepository.find({
      where: { application_id: applicationId }
    });
  }
}