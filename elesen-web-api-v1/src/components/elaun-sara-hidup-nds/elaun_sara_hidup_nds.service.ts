import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ElaunSaraHidupNdsEntity } from './elaun_sara_hidup_nds.entity';
import { CreateElaunSaraHidupNdsDto } from './dto/create-elaun_sara_hidup_nds.dto';
import { UpdateElaunSaraHidupNdsDto } from './dto/update-elaun_sara_hidup_nds.dto';

@Injectable()
export class ElaunSaraHidupNdsService {
  constructor(
    @InjectRepository(ElaunSaraHidupNdsEntity)
    private elaunSaraHidupNdsRepository: Repository<ElaunSaraHidupNdsEntity>,
  ) {}

  findAll(): Promise<ElaunSaraHidupNdsEntity[]> {
    return this.elaunSaraHidupNdsRepository.find();
  }

  async findOne(id: string): Promise<ElaunSaraHidupNdsEntity> {
    const entity = await this.elaunSaraHidupNdsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ElaunSaraHidupNdsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createElaunSaraHidupNdsDto: CreateElaunSaraHidupNdsDto): Promise<ElaunSaraHidupNdsEntity> {
    const entity = this.elaunSaraHidupNdsRepository.create(createElaunSaraHidupNdsDto);
    return this.elaunSaraHidupNdsRepository.save(entity);
  }

  async update(id: string, updateElaunSaraHidupNdsDto: UpdateElaunSaraHidupNdsDto): Promise<ElaunSaraHidupNdsEntity> {
    await this.elaunSaraHidupNdsRepository.update(id, updateElaunSaraHidupNdsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.elaunSaraHidupNdsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ElaunSaraHidupNdsEntity[]> {
    return this.elaunSaraHidupNdsRepository.find({
      where: { application_id: applicationId }
    });
  }
}