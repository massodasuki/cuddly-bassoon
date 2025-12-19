import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselViolationsEntity } from './vessel_violations.entity';
import { CreateVesselViolationsDto } from './dto/create-vessel_violations.dto';
import { UpdateVesselViolationsDto } from './dto/update-vessel_violations.dto';

@Injectable()
export class VesselViolationsService {
  constructor(
    @InjectRepository(VesselViolationsEntity)
    private vesselViolationsRepository: Repository<VesselViolationsEntity>,
  ) {}

  findAll(): Promise<VesselViolationsEntity[]> {
    return this.vesselViolationsRepository.find();
  }

  async findOne(id: string): Promise<VesselViolationsEntity> {
    const entity = await this.vesselViolationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselViolationsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselViolationsDto: CreateVesselViolationsDto): Promise<VesselViolationsEntity> {
    const entity = this.vesselViolationsRepository.create(createVesselViolationsDto);
    return this.vesselViolationsRepository.save(entity);
  }

  async update(id: string, updateVesselViolationsDto: UpdateVesselViolationsDto): Promise<VesselViolationsEntity> {
    await this.vesselViolationsRepository.update(id, updateVesselViolationsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselViolationsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselViolationsEntity[]> {
    return this.vesselViolationsRepository.find({
      where: { application_id: applicationId }
    });
  }
}