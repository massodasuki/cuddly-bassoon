import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FishermanMeritsEntity } from './fisherman-merits.entity';
import { CreateFishermanMeritsDto } from './dto/create-fisherman-merits.dto';
import { UpdateFishermanMeritsDto } from './dto/update-fisherman-merits.dto';

@Injectable()
export class FishermanMeritsService {
  constructor(
    @InjectRepository(FishermanMeritsEntity)
    private fishermanMeritsRepository: Repository<FishermanMeritsEntity>,
  ) {}

  findAll(): Promise<FishermanMeritsEntity[]> {
    return this.fishermanMeritsRepository.find();
  }

  async findOne(id: string): Promise<FishermanMeritsEntity> {
    const entity = await this.fishermanMeritsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`FishermanMeritsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createFishermanMeritsDto: CreateFishermanMeritsDto): Promise<FishermanMeritsEntity> {
    const entity = this.fishermanMeritsRepository.create(createFishermanMeritsDto);
    return this.fishermanMeritsRepository.save(entity);
  }

  async update(id: string, updateFishermanMeritsDto: UpdateFishermanMeritsDto): Promise<FishermanMeritsEntity> {
    await this.fishermanMeritsRepository.update(id, updateFishermanMeritsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.fishermanMeritsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<FishermanMeritsEntity[]> {
    return this.fishermanMeritsRepository.find({
      where: { application_id: applicationId }
    });
  }
}