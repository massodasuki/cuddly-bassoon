import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LandingBasesEntity } from './landing_bases.entity';
import { CreateLandingBasesDto } from './dto/create-landing_bases.dto';
import { UpdateLandingBasesDto } from './dto/update-landing_bases.dto';

@Injectable()
export class LandingBasesService {
  constructor(
    @InjectRepository(LandingBasesEntity)
    private landingBasesRepository: Repository<LandingBasesEntity>,
  ) {}

  findAll(): Promise<LandingBasesEntity[]> {
    return this.landingBasesRepository.find();
  }

  async findOne(id: string): Promise<LandingBasesEntity> {
    const entity = await this.landingBasesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LandingBasesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLandingBasesDto: CreateLandingBasesDto): Promise<LandingBasesEntity> {
    const entity = this.landingBasesRepository.create(createLandingBasesDto);
    return this.landingBasesRepository.save(entity);
  }

  async update(id: string, updateLandingBasesDto: UpdateLandingBasesDto): Promise<LandingBasesEntity> {
    await this.landingBasesRepository.update(id, updateLandingBasesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.landingBasesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LandingBasesEntity[]> {
    return this.landingBasesRepository.find({
      where: { application_id: applicationId }
    });
  }
}