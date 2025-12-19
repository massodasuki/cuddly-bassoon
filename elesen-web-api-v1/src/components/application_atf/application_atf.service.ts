import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationAtfEntity } from './application_atf.entity';
import { CreateApplicationAtfDto } from './dto/create-application_atf.dto';
import { UpdateApplicationAtfDto } from './dto/update-application_atf.dto';

@Injectable()
export class ApplicationAtfService {
  constructor(
    @InjectRepository(ApplicationAtfEntity)
    private applicationAtfRepository: Repository<ApplicationAtfEntity>,
  ) {}

  findAll(): Promise<ApplicationAtfEntity[]> {
    return this.applicationAtfRepository.find();
  }

  async findOne(id: string): Promise<ApplicationAtfEntity> {
    const entity = await this.applicationAtfRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationAtfEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationAtfDto: CreateApplicationAtfDto): Promise<ApplicationAtfEntity> {
    const entity = this.applicationAtfRepository.create(createApplicationAtfDto);
    return this.applicationAtfRepository.save(entity);
  }

  async update(id: string, updateApplicationAtfDto: UpdateApplicationAtfDto): Promise<ApplicationAtfEntity> {
    await this.applicationAtfRepository.update(id, updateApplicationAtfDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationAtfRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationAtfEntity[]> {
    return this.applicationAtfRepository.find({
      where: { application_id: applicationId }
    });
  }
}