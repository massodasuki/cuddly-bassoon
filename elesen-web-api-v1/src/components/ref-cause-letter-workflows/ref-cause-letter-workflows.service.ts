import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefCauseLetterWorkflowsEntity } from './ref-cause-letter-workflows.entity';
import { CreateRefCauseLetterWorkflowsDto } from './dto/create-ref-cause-letter-workflows.dto';
import { UpdateRefCauseLetterWorkflowsDto } from './dto/update-ref-cause-letter-workflows.dto';

@Injectable()
export class RefCauseLetterWorkflowsService {
  constructor(
    @InjectRepository(RefCauseLetterWorkflowsEntity)
    private refCauseLetterWorkflowsRepository: Repository<RefCauseLetterWorkflowsEntity>,
  ) {}

  findAll(): Promise<RefCauseLetterWorkflowsEntity[]> {
    return this.refCauseLetterWorkflowsRepository.find();
  }

  async findOne(id: string): Promise<RefCauseLetterWorkflowsEntity> {
    const entity = await this.refCauseLetterWorkflowsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`RefCauseLetterWorkflowsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createRefCauseLetterWorkflowsDto: CreateRefCauseLetterWorkflowsDto): Promise<RefCauseLetterWorkflowsEntity> {
    const entity = this.refCauseLetterWorkflowsRepository.create(createRefCauseLetterWorkflowsDto);
    return this.refCauseLetterWorkflowsRepository.save(entity);
  }

  async update(id: string, updateRefCauseLetterWorkflowsDto: UpdateRefCauseLetterWorkflowsDto): Promise<RefCauseLetterWorkflowsEntity> {
    await this.refCauseLetterWorkflowsRepository.update(id, updateRefCauseLetterWorkflowsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.refCauseLetterWorkflowsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<RefCauseLetterWorkflowsEntity[]> {
    return this.refCauseLetterWorkflowsRepository.find({
      where: { application_id: applicationId }
    });
  }
}