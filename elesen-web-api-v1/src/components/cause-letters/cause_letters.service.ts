import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CauseLettersEntity } from './cause_letters.entity';
import { CreateCauseLettersDto } from './dto/create-cause_letters.dto';
import { UpdateCauseLettersDto } from './dto/update-cause_letters.dto';

@Injectable()
export class CauseLettersService {
  constructor(
    @InjectRepository(CauseLettersEntity)
    private causeLettersRepository: Repository<CauseLettersEntity>,
  ) {}

  findAll(): Promise<CauseLettersEntity[]> {
    return this.causeLettersRepository.find();
  }

  async findOne(id: string): Promise<CauseLettersEntity> {
    const entity = await this.causeLettersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`CauseLettersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createCauseLettersDto: CreateCauseLettersDto): Promise<CauseLettersEntity> {
    const entity = this.causeLettersRepository.create(createCauseLettersDto);
    return this.causeLettersRepository.save(entity);
  }

  async update(id: string, updateCauseLettersDto: UpdateCauseLettersDto): Promise<CauseLettersEntity> {
    await this.causeLettersRepository.update(id, updateCauseLettersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.causeLettersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<CauseLettersEntity[]> {
    return this.causeLettersRepository.find({
      where: { application_id: applicationId }
    });
  }
}