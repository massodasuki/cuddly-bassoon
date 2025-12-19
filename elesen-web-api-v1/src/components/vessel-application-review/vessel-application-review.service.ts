import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselApplicationReviewEntity } from './vessel-application-review.entity';
import { CreateVesselApplicationReviewDto } from './dto/create-vessel-application-review.dto';
import { UpdateVesselApplicationReviewDto } from './dto/update-vessel-application-review.dto';

@Injectable()
export class VesselApplicationReviewService {
  constructor(
    @InjectRepository(VesselApplicationReviewEntity)
    private vesselApplicationReviewRepository: Repository<VesselApplicationReviewEntity>,
  ) {}

  findAll(): Promise<VesselApplicationReviewEntity[]> {
    return this.vesselApplicationReviewRepository.find();
  }

  async findOne(id: string): Promise<VesselApplicationReviewEntity> {
    const entity = await this.vesselApplicationReviewRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`VesselApplicationReviewEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createVesselApplicationReviewDto: CreateVesselApplicationReviewDto): Promise<VesselApplicationReviewEntity> {
    const entity = this.vesselApplicationReviewRepository.create(createVesselApplicationReviewDto);
    return this.vesselApplicationReviewRepository.save(entity);
  }

  async update(id: string, updateVesselApplicationReviewDto: UpdateVesselApplicationReviewDto): Promise<VesselApplicationReviewEntity> {
    await this.vesselApplicationReviewRepository.update(id, updateVesselApplicationReviewDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.vesselApplicationReviewRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<VesselApplicationReviewEntity[]> {
    return this.vesselApplicationReviewRepository.find({
      where: { application_id: applicationId }
    });
  }
}