import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiSailingEquipmentsEntity } from './lpi-sailing-equipments.entity';
import { CreateLpiSailingEquipmentsDto } from './dto/create-lpi-sailing-equipments.dto';
import { UpdateLpiSailingEquipmentsDto } from './dto/update-lpi-sailing-equipments.dto';

@Injectable()
export class LpiSailingEquipmentsService {
  constructor(
    @InjectRepository(LpiSailingEquipmentsEntity)
    private lpiSailingEquipmentsRepository: Repository<LpiSailingEquipmentsEntity>,
  ) {}

  findAll(): Promise<LpiSailingEquipmentsEntity[]> {
    return this.lpiSailingEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<LpiSailingEquipmentsEntity> {
    const entity = await this.lpiSailingEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiSailingEquipmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiSailingEquipmentsDto: CreateLpiSailingEquipmentsDto): Promise<LpiSailingEquipmentsEntity> {
    const entity = this.lpiSailingEquipmentsRepository.create(createLpiSailingEquipmentsDto);
    return this.lpiSailingEquipmentsRepository.save(entity);
  }

  async update(id: string, updateLpiSailingEquipmentsDto: UpdateLpiSailingEquipmentsDto): Promise<LpiSailingEquipmentsEntity> {
    await this.lpiSailingEquipmentsRepository.update(id, updateLpiSailingEquipmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiSailingEquipmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiSailingEquipmentsEntity[]> {
    return this.lpiSailingEquipmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}