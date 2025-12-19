import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiFishingEquipmentsEntity } from './lpi_fishing_equipments.entity';
import { CreateLpiFishingEquipmentsDto } from './dto/create-lpi_fishing_equipments.dto';
import { UpdateLpiFishingEquipmentsDto } from './dto/update-lpi_fishing_equipments.dto';

@Injectable()
export class LpiFishingEquipmentsService {
  constructor(
    @InjectRepository(LpiFishingEquipmentsEntity)
    private lpiFishingEquipmentsRepository: Repository<LpiFishingEquipmentsEntity>,
  ) {}

  findAll(): Promise<LpiFishingEquipmentsEntity[]> {
    return this.lpiFishingEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<LpiFishingEquipmentsEntity> {
    const entity = await this.lpiFishingEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiFishingEquipmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiFishingEquipmentsDto: CreateLpiFishingEquipmentsDto): Promise<LpiFishingEquipmentsEntity> {
    const entity = this.lpiFishingEquipmentsRepository.create(createLpiFishingEquipmentsDto);
    return this.lpiFishingEquipmentsRepository.save(entity);
  }

  async update(id: string, updateLpiFishingEquipmentsDto: UpdateLpiFishingEquipmentsDto): Promise<LpiFishingEquipmentsEntity> {
    await this.lpiFishingEquipmentsRepository.update(id, updateLpiFishingEquipmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiFishingEquipmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiFishingEquipmentsEntity[]> {
    return this.lpiFishingEquipmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}