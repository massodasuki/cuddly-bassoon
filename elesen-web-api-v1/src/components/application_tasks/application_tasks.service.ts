import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationTasksEntity } from './application_tasks.entity';
import { CreateApplicationTasksDto } from './dto/create-application_tasks.dto';
import { UpdateApplicationTasksDto } from './dto/update-application_tasks.dto';

@Injectable()
export class ApplicationTasksService {
  constructor(
    @InjectRepository(ApplicationTasksEntity)
    private applicationTasksRepository: Repository<ApplicationTasksEntity>,
  ) {}

  findAll(): Promise<ApplicationTasksEntity[]> {
    return this.applicationTasksRepository.find();
  }

  async findOne(id: string): Promise<ApplicationTasksEntity> {
    const entity = await this.applicationTasksRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationTasksEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationTasksDto: CreateApplicationTasksDto): Promise<ApplicationTasksEntity> {
    const entity = this.applicationTasksRepository.create(createApplicationTasksDto);
    return this.applicationTasksRepository.save(entity);
  }

  async update(id: string, updateApplicationTasksDto: UpdateApplicationTasksDto): Promise<ApplicationTasksEntity> {
    await this.applicationTasksRepository.update(id, updateApplicationTasksDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationTasksRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationTasksEntity[]> {
    return this.applicationTasksRepository.find({
      where: { application_id: applicationId }
    });
  }
}