import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpDomestikStepHistoryEntity } from './slp_domestik_step_history.entity';
import { CreateSlpDomestikStepHistoryDto } from './dto/create-slp_domestik_step_history.dto';
import { UpdateSlpDomestikStepHistoryDto } from './dto/update-slp_domestik_step_history.dto';

@Injectable()
export class SlpDomestikStepHistoryService {
  constructor(
    @InjectRepository(SlpDomestikStepHistoryEntity)
    private slpDomestikStepHistoryRepository: Repository<SlpDomestikStepHistoryEntity>,
  ) {}

  findAll(): Promise<SlpDomestikStepHistoryEntity[]> {
    return this.slpDomestikStepHistoryRepository.find();
  }

  async findOne(id: string): Promise<SlpDomestikStepHistoryEntity> {
    const entity = await this.slpDomestikStepHistoryRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpDomestikStepHistoryEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpDomestikStepHistoryDto: CreateSlpDomestikStepHistoryDto): Promise<SlpDomestikStepHistoryEntity> {
    const entity = this.slpDomestikStepHistoryRepository.create(createSlpDomestikStepHistoryDto);
    return this.slpDomestikStepHistoryRepository.save(entity);
  }

  async update(id: string, updateSlpDomestikStepHistoryDto: UpdateSlpDomestikStepHistoryDto): Promise<SlpDomestikStepHistoryEntity> {
    await this.slpDomestikStepHistoryRepository.update(id, updateSlpDomestikStepHistoryDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpDomestikStepHistoryRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpDomestikStepHistoryEntity[]> {
    return this.slpDomestikStepHistoryRepository.find({
      where: { application_id: applicationId }
    });
  }
}