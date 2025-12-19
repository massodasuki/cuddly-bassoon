import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationTpuRayuanEntity } from './application-tpu-rayuan.entity';
import { CreateApplicationTpuRayuanDto } from './dto/create-application-tpu-rayuan.dto';
import { UpdateApplicationTpuRayuanDto } from './dto/update-application-tpu-rayuan.dto';

@Injectable()
export class ApplicationTpuRayuanService {
  constructor(
    @InjectRepository(ApplicationTpuRayuanEntity)
    private applicationTpuRayuanRepository: Repository<ApplicationTpuRayuanEntity>,
  ) {}

  findAll(): Promise<ApplicationTpuRayuanEntity[]> {
    return this.applicationTpuRayuanRepository.find();
  }

  async findOne(id: string): Promise<ApplicationTpuRayuanEntity> {
    const entity = await this.applicationTpuRayuanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationTpuRayuanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationTpuRayuanDto: CreateApplicationTpuRayuanDto): Promise<ApplicationTpuRayuanEntity> {
    const entity = this.applicationTpuRayuanRepository.create(createApplicationTpuRayuanDto);
    return this.applicationTpuRayuanRepository.save(entity);
  }

  async update(id: string, updateApplicationTpuRayuanDto: UpdateApplicationTpuRayuanDto): Promise<ApplicationTpuRayuanEntity> {
    await this.applicationTpuRayuanRepository.update(id, updateApplicationTpuRayuanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationTpuRayuanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationTpuRayuanEntity[]> {
    return this.applicationTpuRayuanRepository.find({
      where: { application_id: applicationId }
    });
  }
}