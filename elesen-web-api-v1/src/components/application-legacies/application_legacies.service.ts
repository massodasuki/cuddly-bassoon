import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationLegaciesEntity } from './application_legacies.entity';
import { CreateApplicationLegaciesDto } from './dto/create-application_legacies.dto';
import { UpdateApplicationLegaciesDto } from './dto/update-application_legacies.dto';

@Injectable()
export class ApplicationLegaciesService {
  constructor(
    @InjectRepository(ApplicationLegaciesEntity)
    private applicationLegaciesRepository: Repository<ApplicationLegaciesEntity>,
  ) {}

  findAll(): Promise<ApplicationLegaciesEntity[]> {
    return this.applicationLegaciesRepository.find();
  }

  async findOne(id: string): Promise<ApplicationLegaciesEntity> {
    const entity = await this.applicationLegaciesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationLegaciesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationLegaciesDto: CreateApplicationLegaciesDto): Promise<ApplicationLegaciesEntity> {
    const entity = this.applicationLegaciesRepository.create(createApplicationLegaciesDto);
    return this.applicationLegaciesRepository.save(entity);
  }

  async update(id: string, updateApplicationLegaciesDto: UpdateApplicationLegaciesDto): Promise<ApplicationLegaciesEntity> {
    await this.applicationLegaciesRepository.update(id, updateApplicationLegaciesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationLegaciesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationLegaciesEntity[]> {
    return this.applicationLegaciesRepository.find({
      where: { application_id: applicationId }
    });
  }
}