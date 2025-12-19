import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiEquipmentItemsEntity } from './lpi_equipment_items.entity';
import { CreateLpiEquipmentItemsDto } from './dto/create-lpi_equipment_items.dto';
import { UpdateLpiEquipmentItemsDto } from './dto/update-lpi_equipment_items.dto';

@Injectable()
export class LpiEquipmentItemsService {
  constructor(
    @InjectRepository(LpiEquipmentItemsEntity)
    private lpiEquipmentItemsRepository: Repository<LpiEquipmentItemsEntity>,
  ) {}

  findAll(): Promise<LpiEquipmentItemsEntity[]> {
    return this.lpiEquipmentItemsRepository.find();
  }

  async findOne(id: string): Promise<LpiEquipmentItemsEntity> {
    const entity = await this.lpiEquipmentItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiEquipmentItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiEquipmentItemsDto: CreateLpiEquipmentItemsDto): Promise<LpiEquipmentItemsEntity> {
    const entity = this.lpiEquipmentItemsRepository.create(createLpiEquipmentItemsDto);
    return this.lpiEquipmentItemsRepository.save(entity);
  }

  async update(id: string, updateLpiEquipmentItemsDto: UpdateLpiEquipmentItemsDto): Promise<LpiEquipmentItemsEntity> {
    await this.lpiEquipmentItemsRepository.update(id, updateLpiEquipmentItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiEquipmentItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiEquipmentItemsEntity[]> {
    return this.lpiEquipmentItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}