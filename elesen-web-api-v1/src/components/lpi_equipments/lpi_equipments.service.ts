import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiEquipmentsEntity } from './lpi_equipments.entity';
import { CreateLpiEquipmentsDto } from './dto/create-lpi_equipments.dto';
import { UpdateLpiEquipmentsDto } from './dto/update-lpi_equipments.dto';

@Injectable()
export class LpiEquipmentsService {
  constructor(
    @InjectRepository(LpiEquipmentsEntity)
    private lpiEquipmentsRepository: Repository<LpiEquipmentsEntity>,
  ) {}

  findAll(): Promise<LpiEquipmentsEntity[]> {
    return this.lpiEquipmentsRepository.find();
  }

  async findOne(id: string): Promise<LpiEquipmentsEntity> {
    const entity = await this.lpiEquipmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiEquipmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiEquipmentsDto: CreateLpiEquipmentsDto): Promise<LpiEquipmentsEntity> {
    const entity = this.lpiEquipmentsRepository.create(createLpiEquipmentsDto);
    return this.lpiEquipmentsRepository.save(entity);
  }

  async update(id: string, updateLpiEquipmentsDto: UpdateLpiEquipmentsDto): Promise<LpiEquipmentsEntity> {
    await this.lpiEquipmentsRepository.update(id, updateLpiEquipmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiEquipmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiEquipmentsEntity[]> {
    return this.lpiEquipmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}