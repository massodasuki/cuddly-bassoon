import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselRegisteredEntity } from './vessel_registered.entity';
import { CreateVesselRegisteredDto } from './dto/create-vessel_registered.dto';
import { UpdateVesselRegisteredDto } from './dto/update-vessel_registered.dto';

@Injectable()
export class VesselRegisteredService {
  constructor(
    @InjectRepository(VesselRegisteredEntity)
    private vesselRegisteredRepository: Repository<VesselRegisteredEntity>,
  ) {}

  findAll(): Promise<VesselRegisteredEntity[]> {
    return this.vesselRegisteredRepository.find();
  }

  async findOne(id: string): Promise<VesselRegisteredEntity> {
    const entity = await this.vesselRegisteredRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselRegisteredEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselRegisteredDto: CreateVesselRegisteredDto): Promise<VesselRegisteredEntity> {
    const entity = this.vesselRegisteredRepository.create(createVesselRegisteredDto);
    return this.vesselRegisteredRepository.save(entity);
  }

  async update(id: string, updateVesselRegisteredDto: UpdateVesselRegisteredDto): Promise<VesselRegisteredEntity> {
    await this.vesselRegisteredRepository.update(id, updateVesselRegisteredDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselRegisteredRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselRegisteredEntity[]> {
    return this.vesselRegisteredRepository.find({
      where: { application_id: applicationId }
    });
  }
}