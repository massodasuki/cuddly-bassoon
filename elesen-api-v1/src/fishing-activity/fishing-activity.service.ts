import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFishingActivityDto } from './dto/create-fishing-activity.dto';
import { UpdateFishingActivityDto } from './dto/update-fishing-activity.dto';
import { FishingActivity } from './entities/fishing-activity.entity';

@Injectable()
export class FishingActivityService {
  constructor(
    @InjectRepository(FishingActivity)
    private readonly fishingActivityRepository: Repository<FishingActivity>,
  ) {}

  async create(createFishingActivityDto: CreateFishingActivityDto): Promise<FishingActivity> {
    const fishingActivity = this.fishingActivityRepository.create(createFishingActivityDto);
    return await this.fishingActivityRepository.save(fishingActivity);
  }

  async findAll(): Promise<FishingActivity[]> {
    return await this.fishingActivityRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<FishingActivity> {
    const fishingActivity = await this.fishingActivityRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!fishingActivity) {
      throw new NotFoundException(`FishingActivity with ID ${id} not found`);
    }
    return fishingActivity;
  }

  async update(id: string, updateFishingActivityDto: UpdateFishingActivityDto): Promise<FishingActivity> {
    const fishingActivity = await this.fishingActivityRepository.findOne({
      where: {  id },
    });
    if (!fishingActivity) {
      throw new NotFoundException(`FishingActivity with ID ${id} not found`);
    }
    await this.fishingActivityRepository.update(id, updateFishingActivityDto);
    const updatedFishingActivity = await this.fishingActivityRepository.findOne({
      where: {  id },
      relations: ['user'],
    });
    if (!updatedFishingActivity) {
      throw new NotFoundException(`FishingActivity with ID ${id} not found after update`);
    }
    return updatedFishingActivity;
  }

  async remove(id: string): Promise<void> {
    const fishingActivity = await this.fishingActivityRepository.findOne({
      where: {  id },
    });
    if (!fishingActivity) {
      throw new NotFoundException(`FishingActivity with ID ${id} not found`);
    }
    await this.fishingActivityRepository.remove(fishingActivity);
  }
}