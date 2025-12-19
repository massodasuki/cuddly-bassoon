import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PantasBatchesEntity } from './pantas_batches.entity';
import { CreatePantasBatchesDto } from './dto/create-pantas_batches.dto';
import { UpdatePantasBatchesDto } from './dto/update-pantas_batches.dto';

@Injectable()
export class PantasBatchesService {
  constructor(
    @InjectRepository(PantasBatchesEntity)
    private pantasBatchesRepository: Repository<PantasBatchesEntity>,
  ) {}

  findAll(): Promise<PantasBatchesEntity[]> {
    return this.pantasBatchesRepository.find();
  }

  async findOne(id: string): Promise<PantasBatchesEntity> {
    const entity = await this.pantasBatchesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PantasBatchesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPantasBatchesDto: CreatePantasBatchesDto): Promise<PantasBatchesEntity> {
    const entity = this.pantasBatchesRepository.create(createPantasBatchesDto);
    return this.pantasBatchesRepository.save(entity);
  }

  async update(id: string, updatePantasBatchesDto: UpdatePantasBatchesDto): Promise<PantasBatchesEntity> {
    await this.pantasBatchesRepository.update(id, updatePantasBatchesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pantasBatchesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PantasBatchesEntity[]> {
    return this.pantasBatchesRepository.find({
      where: { application_id: applicationId }
    });
  }
}