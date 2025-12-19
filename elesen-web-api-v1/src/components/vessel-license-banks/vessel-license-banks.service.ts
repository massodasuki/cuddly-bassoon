import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselLicenseBanksEntity } from './vessel-license-banks.entity';
import { CreateVesselLicenseBanksDto } from './dto/create-vessel-license-banks.dto';
import { UpdateVesselLicenseBanksDto } from './dto/update-vessel-license-banks.dto';

@Injectable()
export class VesselLicenseBanksService {
  constructor(
    @InjectRepository(VesselLicenseBanksEntity)
    private vesselLicenseBanksRepository: Repository<VesselLicenseBanksEntity>,
  ) {}

  findAll(): Promise<VesselLicenseBanksEntity[]> {
    return this.vesselLicenseBanksRepository.find();
  }

  async findOne(id: string): Promise<VesselLicenseBanksEntity> {
    const entity = await this.vesselLicenseBanksRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselLicenseBanksEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselLicenseBanksDto: CreateVesselLicenseBanksDto): Promise<VesselLicenseBanksEntity> {
    const entity = this.vesselLicenseBanksRepository.create(createVesselLicenseBanksDto);
    return this.vesselLicenseBanksRepository.save(entity);
  }

  async update(id: string, updateVesselLicenseBanksDto: UpdateVesselLicenseBanksDto): Promise<VesselLicenseBanksEntity> {
    await this.vesselLicenseBanksRepository.update(id, updateVesselLicenseBanksDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselLicenseBanksRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselLicenseBanksEntity[]> {
    return this.vesselLicenseBanksRepository.find({
      where: { application_id: applicationId }
    });
  }
}