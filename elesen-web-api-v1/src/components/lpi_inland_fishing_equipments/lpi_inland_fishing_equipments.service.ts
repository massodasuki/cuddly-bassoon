import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiInlandFishingEquipmentsEntity } from './lpi_inland_fishing_equipments.entity';
import { CreateLpiInlandFishingEquipmentsDto } from './dto/create-lpi_inland_fishing_equipments.dto';
import { UpdateLpiInlandFishingEquipmentsDto } from './dto/update-lpi_inland_fishing_equipments.dto';

@Injectable()
export class LpiInlandFishingEquipmentsService {
  constructor(
    @InjectRepository(LpiInlandFishingEquipmentsEntity)
    private lpiInlandFishingEquipmentsRepository: Repository<LpiInlandFishingEquipmentsEntity>,
  ) {}

  findAll(): Promise<LpiInlandFishingEquipmentsEntity[]> {
    return this.lpiInlandFishingEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<LpiInlandFishingEquipmentsEntity> {
    const entity = await this.lpiInlandFishingEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiInlandFishingEquipmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiInlandFishingEquipmentsDto: CreateLpiInlandFishingEquipmentsDto): Promise<LpiInlandFishingEquipmentsEntity> {
    const entity = this.lpiInlandFishingEquipmentsRepository.create(createLpiInlandFishingEquipmentsDto);
    return this.lpiInlandFishingEquipmentsRepository.save(entity);
  }

  async update(id: string, updateLpiInlandFishingEquipmentsDto: UpdateLpiInlandFishingEquipmentsDto): Promise<LpiInlandFishingEquipmentsEntity> {
    await this.lpiInlandFishingEquipmentsRepository.update(id, updateLpiInlandFishingEquipmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiInlandFishingEquipmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiInlandFishingEquipmentsEntity[]> {
    return this.lpiInlandFishingEquipmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}