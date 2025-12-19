import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseBeneficialOwnersEntity } from './vessel-license-beneficial-owners.entity';
import { CreateVesselLicenseBeneficialOwnersDto } from './dto/create-vessel-license-beneficial-owners.dto';
import { UpdateVesselLicenseBeneficialOwnersDto } from './dto/update-vessel-license-beneficial-owners.dto';

@Injectable()
export class VesselLicenseBeneficialOwnersService {
  constructor(
    @InjectRepository(VesselLicenseBeneficialOwnersEntity)
    private vesselLicenseBeneficialOwnersRepository: Repository<VesselLicenseBeneficialOwnersEntity>,
  ) {}

  findAll(): Promise<VesselLicenseBeneficialOwnersEntity[]> {
    return this.vesselLicenseBeneficialOwnersRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseBeneficialOwnersEntity> {
    const entity = await this.vesselLicenseBeneficialOwnersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseBeneficialOwnersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseBeneficialOwnersDto: CreateVesselLicenseBeneficialOwnersDto): Promise<VesselLicenseBeneficialOwnersEntity> {
    const entity = this.vesselLicenseBeneficialOwnersRepository.create(createVesselLicenseBeneficialOwnersDto);
    return this.vesselLicenseBeneficialOwnersRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseBeneficialOwnersDto: UpdateVesselLicenseBeneficialOwnersDto): Promise<VesselLicenseBeneficialOwnersEntity> {
    await this.vesselLicenseBeneficialOwnersRepository.update(id, updateVesselLicenseBeneficialOwnersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseBeneficialOwnersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseBeneficialOwnersEntity[]> {
    return this.vesselLicenseBeneficialOwnersRepository.find({
      where: { application_id: applicationId }
    });
  }
}