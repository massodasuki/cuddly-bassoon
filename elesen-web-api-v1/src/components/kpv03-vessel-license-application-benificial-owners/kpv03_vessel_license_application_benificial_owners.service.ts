import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpv03VesselLicenseApplicationBenificialOwnersEntity } from './kpv03_vessel_license_application_benificial_owners.entity';
import { CreateKpv03VesselLicenseApplicationBenificialOwnersDto } from './dto/create-kpv03_vessel_license_application_benificial_owners.dto';
import { UpdateKpv03VesselLicenseApplicationBenificialOwnersDto } from './dto/update-kpv03_vessel_license_application_benificial_owners.dto';

@Injectable()
export class Kpv03VesselLicenseApplicationBenificialOwnersService {
  constructor(
    @InjectRepository(Kpv03VesselLicenseApplicationBenificialOwnersEntity)
    private kpv03VesselLicenseApplicationBenificialOwnersRepository: Repository<Kpv03VesselLicenseApplicationBenificialOwnersEntity>,
  ) {}

  findAll(): Promise<Kpv03VesselLicenseApplicationBenificialOwnersEntity[]> {
    return this.kpv03VesselLicenseApplicationBenificialOwnersRepository.find();
  }

  async findOne(id: string): Promise<Kpv03VesselLicenseApplicationBenificialOwnersEntity> {
    const entity = await this.kpv03VesselLicenseApplicationBenificialOwnersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Kpv03VesselLicenseApplicationBenificialOwnersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createKpv03VesselLicenseApplicationBenificialOwnersDto: CreateKpv03VesselLicenseApplicationBenificialOwnersDto): Promise<Kpv03VesselLicenseApplicationBenificialOwnersEntity> {
    const entity = this.kpv03VesselLicenseApplicationBenificialOwnersRepository.create(createKpv03VesselLicenseApplicationBenificialOwnersDto);
    return this.kpv03VesselLicenseApplicationBenificialOwnersRepository.save(entity);
  }

  async update(id: string, updateKpv03VesselLicenseApplicationBenificialOwnersDto: UpdateKpv03VesselLicenseApplicationBenificialOwnersDto): Promise<Kpv03VesselLicenseApplicationBenificialOwnersEntity> {
    await this.kpv03VesselLicenseApplicationBenificialOwnersRepository.update(id, updateKpv03VesselLicenseApplicationBenificialOwnersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.kpv03VesselLicenseApplicationBenificialOwnersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Kpv03VesselLicenseApplicationBenificialOwnersEntity[]> {
    return this.kpv03VesselLicenseApplicationBenificialOwnersRepository.find({
      where: { application_id: applicationId }
    });
  }
}