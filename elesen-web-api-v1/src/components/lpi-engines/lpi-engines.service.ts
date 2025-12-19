import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiEnginesEntity } from './lpi-engines.entity';
import { CreateLpiEnginesDto } from './dto/create-lpi-engines.dto';
import { UpdateLpiEnginesDto } from './dto/update-lpi-engines.dto';

@Injectable()
export class LpiEnginesService {
  constructor(
    @InjectRepository(LpiEnginesEntity)
    private lpiEnginesRepository: Repository<LpiEnginesEntity>,
  ) {}

  findAll(): Promise<LpiEnginesEntity[]> {
    return this.lpiEnginesRepository.find();
  }

  async findOne(id: string): Promise<LpiEnginesEntity> {
    const entity = await this.lpiEnginesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiEnginesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiEnginesDto: CreateLpiEnginesDto): Promise<LpiEnginesEntity> {
    const entity = this.lpiEnginesRepository.create(createLpiEnginesDto);
    return this.lpiEnginesRepository.save(entity);
  }

  async update(id: string, updateLpiEnginesDto: UpdateLpiEnginesDto): Promise<LpiEnginesEntity> {
    await this.lpiEnginesRepository.update(id, updateLpiEnginesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiEnginesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiEnginesEntity[]> {
    return this.lpiEnginesRepository.find({
      where: { application_id: applicationId }
    });
  }
}