import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FishingEquipmentLpisEntity } from './fishing-equipment-lpis.entity';
import { CreateFishingEquipmentLpisDto } from './dto/create-fishing-equipment-lpis.dto';
import { UpdateFishingEquipmentLpisDto } from './dto/update-fishing-equipment-lpis.dto';

@Injectable()
export class FishingEquipmentLpisService {
  constructor(
    @InjectRepository(FishingEquipmentLpisEntity)
    private fishingEquipmentLpisRepository: Repository<FishingEquipmentLpisEntity>,
  ) {}

  findAll(): Promise<FishingEquipmentLpisEntity[]> {
    return this.fishingEquipmentLpisRepository.find();
  }

  async findOne(id: string): Promise<FishingEquipmentLpisEntity> {
    const entity = await this.fishingEquipmentLpisRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`FishingEquipmentLpisEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createFishingEquipmentLpisDto: CreateFishingEquipmentLpisDto): Promise<FishingEquipmentLpisEntity> {
    const entity = this.fishingEquipmentLpisRepository.create(createFishingEquipmentLpisDto);
    return this.fishingEquipmentLpisRepository.save(entity);
  }

  async update(id: string, updateFishingEquipmentLpisDto: UpdateFishingEquipmentLpisDto): Promise<FishingEquipmentLpisEntity> {
    await this.fishingEquipmentLpisRepository.update(id, updateFishingEquipmentLpisDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.fishingEquipmentLpisRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<FishingEquipmentLpisEntity[]> {
    return this.fishingEquipmentLpisRepository.find({
      where: { application_id: applicationId }
    });
  }
}