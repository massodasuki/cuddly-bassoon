import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselAtfsEntity } from './vessel_atfs.entity';
import { CreateVesselAtfsDto } from './dto/create-vessel_atfs.dto';
import { UpdateVesselAtfsDto } from './dto/update-vessel_atfs.dto';

@Injectable()
export class VesselAtfsService {
  constructor(
    @InjectRepository(VesselAtfsEntity)
    private vesselAtfsRepository: Repository<VesselAtfsEntity>,
  ) {}

  findAll(): Promise<VesselAtfsEntity[]> {
    return this.vesselAtfsRepository.find();
  }

  async findOne(id: string): Promise<VesselAtfsEntity> {
    const entity = await this.vesselAtfsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselAtfsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselAtfsDto: CreateVesselAtfsDto): Promise<VesselAtfsEntity> {
    const entity = this.vesselAtfsRepository.create(createVesselAtfsDto);
    return this.vesselAtfsRepository.save(entity);
  }

  async update(id: string, updateVesselAtfsDto: UpdateVesselAtfsDto): Promise<VesselAtfsEntity> {
    await this.vesselAtfsRepository.update(id, updateVesselAtfsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselAtfsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselAtfsEntity[]> {
    return this.vesselAtfsRepository.find({
      where: { application_id: applicationId }
    });
  }
}