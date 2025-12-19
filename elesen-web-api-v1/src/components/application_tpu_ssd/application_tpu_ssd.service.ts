import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationTpuSsdEntity } from './application_tpu_ssd.entity';
import { CreateApplicationTpuSsdDto } from './dto/create-application_tpu_ssd.dto';
import { UpdateApplicationTpuSsdDto } from './dto/update-application_tpu_ssd.dto';

@Injectable()
export class ApplicationTpuSsdService {
  constructor(
    @InjectRepository(ApplicationTpuSsdEntity)
    private applicationTpuSsdRepository: Repository<ApplicationTpuSsdEntity>,
  ) {}

  findAll(): Promise<ApplicationTpuSsdEntity[]> {
    return this.applicationTpuSsdRepository.find();
  }

  async findOne(id: string): Promise<ApplicationTpuSsdEntity> {
    const entity = await this.applicationTpuSsdRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationTpuSsdEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationTpuSsdDto: CreateApplicationTpuSsdDto): Promise<ApplicationTpuSsdEntity> {
    const entity = this.applicationTpuSsdRepository.create(createApplicationTpuSsdDto);
    return this.applicationTpuSsdRepository.save(entity);
  }

  async update(id: string, updateApplicationTpuSsdDto: UpdateApplicationTpuSsdDto): Promise<ApplicationTpuSsdEntity> {
    await this.applicationTpuSsdRepository.update(id, updateApplicationTpuSsdDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationTpuSsdRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationTpuSsdEntity[]> {
    return this.applicationTpuSsdRepository.find({
      where: { application_id: applicationId }
    });
  }
}