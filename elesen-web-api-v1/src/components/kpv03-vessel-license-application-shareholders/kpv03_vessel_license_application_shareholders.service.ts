import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationShareholdersEntity } from './kpv03_vessel_license_application_shareholders.entity';
import { CreateKpv03VesselLicenseApplicationShareholdersDto } from './dto/create-kpv03_vessel_license_application_shareholders.dto';
import { UpdateKpv03VesselLicenseApplicationShareholdersDto } from './dto/update-kpv03_vessel_license_application_shareholders.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationShareholdersService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationShareholdersEntity)
    private kpv03VesselLicenseApplicationShareholdersRepository: Repository<Kpv03VesselLicenseApplicationShareholdersEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationShareholdersEntity[]> {
    return this.kpv03VesselLicenseApplicationShareholdersRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationShareholdersEntity> {
    const entity = await this.kpv03VesselLicenseApplicationShareholdersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationShareholdersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationShareholdersDto: CreateKpv03VesselLicenseApplicationShareholdersDto): Promise<Kpv03VesselLicenseApplicationShareholdersEntity> {
    const entity = this.kpv03VesselLicenseApplicationShareholdersRepository.create(createKpv03VesselLicenseApplicationShareholdersDto);
    return this.kpv03VesselLicenseApplicationShareholdersRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationShareholdersDto: UpdateKpv03VesselLicenseApplicationShareholdersDto): Promise<Kpv03VesselLicenseApplicationShareholdersEntity> {
    await this.kpv03VesselLicenseApplicationShareholdersRepository.update(id, updateKpv03VesselLicenseApplicationShareholdersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationShareholdersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationShareholdersEntity[]> {
    return this.kpv03VesselLicenseApplicationShareholdersRepository.find({
      where: { application_id: applicationId }
    });
  }
}