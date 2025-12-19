import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiInspectionItemsEntity } from './lpi-inspection-items.entity';
import { CreateLpiInspectionItemsDto } from './dto/create-lpi-inspection-items.dto';
import { UpdateLpiInspectionItemsDto } from './dto/update-lpi-inspection-items.dto';

@Injectable()
export class LpiInspectionItemsService {
  constructor(
    @InjectRepository(LpiInspectionItemsEntity)
    private lpiInspectionItemsRepository: Repository<LpiInspectionItemsEntity>,
  ) {}

  findAll(): Promise<LpiInspectionItemsEntity[]> {
    return this.lpiInspectionItemsRepository.find();
  }

  async findOne(id: string): Promise<LpiInspectionItemsEntity> {
    const entity = await this.lpiInspectionItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiInspectionItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiInspectionItemsDto: CreateLpiInspectionItemsDto): Promise<LpiInspectionItemsEntity> {
    const entity = this.lpiInspectionItemsRepository.create(createLpiInspectionItemsDto);
    return this.lpiInspectionItemsRepository.save(entity);
  }

  async update(id: string, updateLpiInspectionItemsDto: UpdateLpiInspectionItemsDto): Promise<LpiInspectionItemsEntity> {
    await this.lpiInspectionItemsRepository.update(id, updateLpiInspectionItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiInspectionItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiInspectionItemsEntity[]> {
    return this.lpiInspectionItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}