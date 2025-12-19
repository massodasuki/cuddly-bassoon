import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CauseLetterStagesEntity } from './cause_letter_stages.entity';
import { CreateCauseLetterStagesDto } from './dto/create-cause_letter_stages.dto';
import { UpdateCauseLetterStagesDto } from './dto/update-cause_letter_stages.dto';

@Injectable()
export class CauseLetterStagesService {
  constructor(
    @InjectRepository(CauseLetterStagesEntity)
    private causeLetterStagesRepository: Repository<CauseLetterStagesEntity>,
  ) {}

  findAll(): Promise<CauseLetterStagesEntity[]> {
    return this.causeLetterStagesRepository.find();
  }

  async findOne(id: string): Promise<CauseLetterStagesEntity> {
    const entity = await this.causeLetterStagesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`CauseLetterStagesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createCauseLetterStagesDto: CreateCauseLetterStagesDto): Promise<CauseLetterStagesEntity> {
    const entity = this.causeLetterStagesRepository.create(createCauseLetterStagesDto);
    return this.causeLetterStagesRepository.save(entity);
  }

  async update(id: string, updateCauseLetterStagesDto: UpdateCauseLetterStagesDto): Promise<CauseLetterStagesEntity> {
    await this.causeLetterStagesRepository.update(id, updateCauseLetterStagesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.causeLetterStagesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<CauseLetterStagesEntity[]> {
    return this.causeLetterStagesRepository.find({
      where: { application_id: applicationId }
    });
  }
}