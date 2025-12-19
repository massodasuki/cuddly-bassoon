import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiNavigationsEntity } from './lpi_navigations.entity';
import { CreateLpiNavigationsDto } from './dto/create-lpi_navigations.dto';
import { UpdateLpiNavigationsDto } from './dto/update-lpi_navigations.dto';

@Injectable()
export class LpiNavigationsService {
  constructor(
    @InjectRepository(LpiNavigationsEntity)
    private lpiNavigationsRepository: Repository<LpiNavigationsEntity>,
  ) {}

  findAll(): Promise<LpiNavigationsEntity[]> {
    return this.lpiNavigationsRepository.find();
  }

  async findOne(id: string): Promise<LpiNavigationsEntity> {
    const entity = await this.lpiNavigationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiNavigationsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiNavigationsDto: CreateLpiNavigationsDto): Promise<LpiNavigationsEntity> {
    const entity = this.lpiNavigationsRepository.create(createLpiNavigationsDto);
    return this.lpiNavigationsRepository.save(entity);
  }

  async update(id: string, updateLpiNavigationsDto: UpdateLpiNavigationsDto): Promise<LpiNavigationsEntity> {
    await this.lpiNavigationsRepository.update(id, updateLpiNavigationsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiNavigationsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiNavigationsEntity[]> {
    return this.lpiNavigationsRepository.find({
      where: { application_id: applicationId }
    });
  }
}