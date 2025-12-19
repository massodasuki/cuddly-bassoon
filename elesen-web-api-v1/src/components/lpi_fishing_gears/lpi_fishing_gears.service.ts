import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiFishingGearsEntity } from './lpi_fishing_gears.entity';
import { CreateLpiFishingGearsDto } from './dto/create-lpi_fishing_gears.dto';
import { UpdateLpiFishingGearsDto } from './dto/update-lpi_fishing_gears.dto';

@Injectable()
export class LpiFishingGearsService {
  constructor(
    @InjectRepository(LpiFishingGearsEntity)
    private lpiFishingGearsRepository: Repository<LpiFishingGearsEntity>,
  ) {}

  findAll(): Promise<LpiFishingGearsEntity[]> {
    return this.lpiFishingGearsRepository.find();
  }

  async findOne(id: string): Promise<LpiFishingGearsEntity> {
    const entity = await this.lpiFishingGearsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiFishingGearsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiFishingGearsDto: CreateLpiFishingGearsDto): Promise<LpiFishingGearsEntity> {
    const entity = this.lpiFishingGearsRepository.create(createLpiFishingGearsDto);
    return this.lpiFishingGearsRepository.save(entity);
  }

  async update(id: string, updateLpiFishingGearsDto: UpdateLpiFishingGearsDto): Promise<LpiFishingGearsEntity> {
    await this.lpiFishingGearsRepository.update(id, updateLpiFishingGearsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiFishingGearsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiFishingGearsEntity[]> {
    return this.lpiFishingGearsRepository.find({
      where: { application_id: applicationId }
    });
  }
}