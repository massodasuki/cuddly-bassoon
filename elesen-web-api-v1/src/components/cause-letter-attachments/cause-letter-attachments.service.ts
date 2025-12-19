import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CauseLetterAttachmentsEntity } from './cause-letter-attachments.entity';
import { CreateCauseLetterAttachmentsDto } from './dto/create-cause-letter-attachments.dto';
import { UpdateCauseLetterAttachmentsDto } from './dto/update-cause-letter-attachments.dto';

@Injectable()
export class CauseLetterAttachmentsService {
  constructor(
    @InjectRepository(CauseLetterAttachmentsEntity)
    private causeLetterAttachmentsRepository: Repository<CauseLetterAttachmentsEntity>,
  ) {}

  findAll(): Promise<CauseLetterAttachmentsEntity[]> {
    return this.causeLetterAttachmentsRepository.find();
  }

  async findOne(id: string): Promise<CauseLetterAttachmentsEntity> {
    const entity = await this.causeLetterAttachmentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`CauseLetterAttachmentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createCauseLetterAttachmentsDto: CreateCauseLetterAttachmentsDto): Promise<CauseLetterAttachmentsEntity> {
    const entity = this.causeLetterAttachmentsRepository.create(createCauseLetterAttachmentsDto);
    return this.causeLetterAttachmentsRepository.save(entity);
  }

  async update(id: string, updateCauseLetterAttachmentsDto: UpdateCauseLetterAttachmentsDto): Promise<CauseLetterAttachmentsEntity> {
    await this.causeLetterAttachmentsRepository.update(id, updateCauseLetterAttachmentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.causeLetterAttachmentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<CauseLetterAttachmentsEntity[]> {
    return this.causeLetterAttachmentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}