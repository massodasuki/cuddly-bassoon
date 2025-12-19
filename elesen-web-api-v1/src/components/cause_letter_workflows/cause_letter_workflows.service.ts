import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CauseLetterWorkflowsEntity } from './cause_letter_workflows.entity';
import { CreateCauseLetterWorkflowsDto } from './dto/create-cause_letter_workflows.dto';
import { UpdateCauseLetterWorkflowsDto } from './dto/update-cause_letter_workflows.dto';

@Injectable()
export class CauseLetterWorkflowsService {
  constructor(
    @InjectRepository(CauseLetterWorkflowsEntity)
    private causeLetterWorkflowsRepository: Repository<CauseLetterWorkflowsEntity>,
  ) {}

  findAll(): Promise<CauseLetterWorkflowsEntity[]> {
    return this.causeLetterWorkflowsRepository.find();
  }

  async findOne(id: string): Promise<CauseLetterWorkflowsEntity> {
    const entity = await this.causeLetterWorkflowsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`CauseLetterWorkflowsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createCauseLetterWorkflowsDto: CreateCauseLetterWorkflowsDto): Promise<CauseLetterWorkflowsEntity> {
    const entity = this.causeLetterWorkflowsRepository.create(createCauseLetterWorkflowsDto);
    return this.causeLetterWorkflowsRepository.save(entity);
  }

  async update(id: string, updateCauseLetterWorkflowsDto: UpdateCauseLetterWorkflowsDto): Promise<CauseLetterWorkflowsEntity> {
    await this.causeLetterWorkflowsRepository.update(id, updateCauseLetterWorkflowsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.causeLetterWorkflowsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<CauseLetterWorkflowsEntity[]> {
    return this.causeLetterWorkflowsRepository.find({
      where: { application_id: applicationId }
    });
  }
}