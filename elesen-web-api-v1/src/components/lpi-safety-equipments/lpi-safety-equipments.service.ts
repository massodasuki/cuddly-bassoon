import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiSafetyEquipmentsEntity } from './lpi-safety-equipments.entity';
import { CreateLpiSafetyEquipmentsDto } from './dto/create-lpi-safety-equipments.dto';
import { UpdateLpiSafetyEquipmentsDto } from './dto/update-lpi-safety-equipments.dto';

@Injectable()
export class LpiSafetyEquipmentsService {
  constructor(
    @InjectRepository(LpiSafetyEquipmentsEntity)
    private lpiSafetyEquipmentsRepository: Repository<LpiSafetyEquipmentsEntity>,
  ) {}

  findAll(): Promise<LpiSafetyEquipmentsEntity[]> {
    return this.lpiSafetyEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<LpiSafetyEquipmentsEntity> {
    const entity = await this.lpiSafetyEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiSafetyEquipmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiSafetyEquipmentsDto: CreateLpiSafetyEquipmentsDto): Promise<LpiSafetyEquipmentsEntity> {
    const entity = this.lpiSafetyEquipmentsRepository.create(createLpiSafetyEquipmentsDto);
    return this.lpiSafetyEquipmentsRepository.save(entity);
  }

  async update(id: string, updateLpiSafetyEquipmentsDto: UpdateLpiSafetyEquipmentsDto): Promise<LpiSafetyEquipmentsEntity> {
    await this.lpiSafetyEquipmentsRepository.update(id, updateLpiSafetyEquipmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiSafetyEquipmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiSafetyEquipmentsEntity[]> {
    return this.lpiSafetyEquipmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}