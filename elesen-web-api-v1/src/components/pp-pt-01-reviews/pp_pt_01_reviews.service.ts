import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PpPt01ReviewsEntity } from './pp_pt_01_reviews.entity';
import { CreatePpPt01ReviewsDto } from './dto/create-pp_pt_01_reviews.dto';
import { UpdatePpPt01ReviewsDto } from './dto/update-pp_pt_01_reviews.dto';

@Injectable()
export class PpPt01ReviewsService {
  constructor(
    @InjectRepository(PpPt01ReviewsEntity)
    private ppPt01ReviewsRepository: Repository<PpPt01ReviewsEntity>,
  ) {}

  findAll(): Promise<PpPt01ReviewsEntity[]> {
    return this.ppPt01ReviewsRepository.find();
  }

  async findOne(id: string): Promise<PpPt01ReviewsEntity> {
    const entity = await this.ppPt01ReviewsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PpPt01ReviewsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpPt01ReviewsDto: CreatePpPt01ReviewsDto): Promise<PpPt01ReviewsEntity> {
    const entity = this.ppPt01ReviewsRepository.create(createPpPt01ReviewsDto);
    return this.ppPt01ReviewsRepository.save(entity);
  }

  async update(id: string, updatePpPt01ReviewsDto: UpdatePpPt01ReviewsDto): Promise<PpPt01ReviewsEntity> {
    await this.ppPt01ReviewsRepository.update(id, updatePpPt01ReviewsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppPt01ReviewsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PpPt01ReviewsEntity[]> {
    return this.ppPt01ReviewsRepository.find({
      where: { application_id: applicationId }
    });
  }
}