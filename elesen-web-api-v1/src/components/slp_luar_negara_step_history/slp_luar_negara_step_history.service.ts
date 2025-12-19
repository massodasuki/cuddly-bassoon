import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpLuarNegaraStepHistoryEntity } from './slp_luar_negara_step_history.entity';
import { CreateSlpLuarNegaraStepHistoryDto } from './dto/create-slp_luar_negara_step_history.dto';
import { UpdateSlpLuarNegaraStepHistoryDto } from './dto/update-slp_luar_negara_step_history.dto';

@Injectable()
export class SlpLuarNegaraStepHistoryService {
  constructor(
    @InjectRepository(SlpLuarNegaraStepHistoryEntity)
    private slpLuarNegaraStepHistoryRepository: Repository<SlpLuarNegaraStepHistoryEntity>,
  ) {}

  findAll(): Promise<SlpLuarNegaraStepHistoryEntity[]> {
    return this.slpLuarNegaraStepHistoryRepository.find();
  }

  async findOne(id: string): Promise<SlpLuarNegaraStepHistoryEntity> {
    const entity = await this.slpLuarNegaraStepHistoryRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpLuarNegaraStepHistoryEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpLuarNegaraStepHistoryDto: CreateSlpLuarNegaraStepHistoryDto): Promise<SlpLuarNegaraStepHistoryEntity> {
    const entity = this.slpLuarNegaraStepHistoryRepository.create(createSlpLuarNegaraStepHistoryDto);
    return this.slpLuarNegaraStepHistoryRepository.save(entity);
  }

  async update(id: string, updateSlpLuarNegaraStepHistoryDto: UpdateSlpLuarNegaraStepHistoryDto): Promise<SlpLuarNegaraStepHistoryEntity> {
    await this.slpLuarNegaraStepHistoryRepository.update(id, updateSlpLuarNegaraStepHistoryDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpLuarNegaraStepHistoryRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpLuarNegaraStepHistoryEntity[]> {
    return this.slpLuarNegaraStepHistoryRepository.find({
      where: { application_id: applicationId }
    });
  }
}