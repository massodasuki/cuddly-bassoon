import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiInlandFishingEquipmentItemsEntity } from './lpi-inland-fishing-equipment-items.entity';
import { CreateLpiInlandFishingEquipmentItemsDto } from './dto/create-lpi-inland-fishing-equipment-items.dto';
import { UpdateLpiInlandFishingEquipmentItemsDto } from './dto/update-lpi-inland-fishing-equipment-items.dto';

@Injectable()
export class LpiInlandFishingEquipmentItemsService {
  constructor(
    @InjectRepository(LpiInlandFishingEquipmentItemsEntity)
    private lpiInlandFishingEquipmentItemsRepository: Repository<LpiInlandFishingEquipmentItemsEntity>,
  ) {}

  findAll(): Promise<LpiInlandFishingEquipmentItemsEntity[]> {
    return this.lpiInlandFishingEquipmentItemsRepository.find();
  }

  async findOne(id: string): Promise<LpiInlandFishingEquipmentItemsEntity> {
    const entity = await this.lpiInlandFishingEquipmentItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiInlandFishingEquipmentItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiInlandFishingEquipmentItemsDto: CreateLpiInlandFishingEquipmentItemsDto): Promise<LpiInlandFishingEquipmentItemsEntity> {
    const entity = this.lpiInlandFishingEquipmentItemsRepository.create(createLpiInlandFishingEquipmentItemsDto);
    return this.lpiInlandFishingEquipmentItemsRepository.save(entity);
  }

  async update(id: string, updateLpiInlandFishingEquipmentItemsDto: UpdateLpiInlandFishingEquipmentItemsDto): Promise<LpiInlandFishingEquipmentItemsEntity> {
    await this.lpiInlandFishingEquipmentItemsRepository.update(id, updateLpiInlandFishingEquipmentItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiInlandFishingEquipmentItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiInlandFishingEquipmentItemsEntity[]> {
    return this.lpiInlandFishingEquipmentItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}