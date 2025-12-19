import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselEquipmentsEntity } from './vessel-equipments.entity';
import { CreateVesselEquipmentsDto } from './dto/create-vessel-equipments.dto';
import { UpdateVesselEquipmentsDto } from './dto/update-vessel-equipments.dto';

@Injectable()
export class VesselEquipmentsService {
  constructor(
    @InjectRepository(VesselEquipmentsEntity)
    private vesselEquipmentsRepository: Repository<VesselEquipmentsEntity>,
  ) {}

  findAll(): Promise<VesselEquipmentsEntity[]> {
    return this.vesselEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<VesselEquipmentsEntity> {
    const entity = await this.vesselEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselEquipmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselEquipmentsDto: CreateVesselEquipmentsDto): Promise<VesselEquipmentsEntity> {
    const entity = this.vesselEquipmentsRepository.create(createVesselEquipmentsDto);
    return this.vesselEquipmentsRepository.save(entity);
  }

  async update(id: string, updateVesselEquipmentsDto: UpdateVesselEquipmentsDto): Promise<VesselEquipmentsEntity> {
    await this.vesselEquipmentsRepository.update(id, updateVesselEquipmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselEquipmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselEquipmentsEntity[]> {
    return this.vesselEquipmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}