import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CauseLetterCommentsEntity } from './cause_letter_comments.entity';
import { CreateCauseLetterCommentsDto } from './dto/create-cause_letter_comments.dto';
import { UpdateCauseLetterCommentsDto } from './dto/update-cause_letter_comments.dto';

@Injectable()
export class CauseLetterCommentsService {
  constructor(
    @InjectRepository(CauseLetterCommentsEntity)
    private causeLetterCommentsRepository: Repository<CauseLetterCommentsEntity>,
  ) {}

  findAll(): Promise<CauseLetterCommentsEntity[]> {
    return this.causeLetterCommentsRepository.find();
  }

  async findOne(id: string): Promise<CauseLetterCommentsEntity> {
    const entity = await this.causeLetterCommentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`CauseLetterCommentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createCauseLetterCommentsDto: CreateCauseLetterCommentsDto): Promise<CauseLetterCommentsEntity> {
    const entity = this.causeLetterCommentsRepository.create(createCauseLetterCommentsDto);
    return this.causeLetterCommentsRepository.save(entity);
  }

  async update(id: string, updateCauseLetterCommentsDto: UpdateCauseLetterCommentsDto): Promise<CauseLetterCommentsEntity> {
    await this.causeLetterCommentsRepository.update(id, updateCauseLetterCommentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.causeLetterCommentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<CauseLetterCommentsEntity[]> {
    return this.causeLetterCommentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}