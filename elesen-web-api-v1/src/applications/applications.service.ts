import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from './application.entity';
import { CreateApplicationEntityDto } from './dto/create-application.dto';
import { UpdateApplicationEntityDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(ApplicationEntity)
    private applicationsRepository: Repository<ApplicationEntity>,
  ) {}

  findAll(): Promise<ApplicationEntity[]> {
    return this.applicationsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationEntity> {
    const application = await this.applicationsRepository.findOneBy({ id });
    if (!application) {
      throw new Error('ApplicationEntity not found');
    }
    return application;
  }

  async create(createApplicationEntityDto: CreateApplicationEntityDto): Promise<ApplicationEntity> {
    const application = this.applicationsRepository.create(createApplicationEntityDto);
    return this.applicationsRepository.save(application);
  }

  async update(id: string, updateApplicationEntityDto: UpdateApplicationEntityDto): Promise<ApplicationEntity> {
    await this.applicationsRepository.update(id, updateApplicationEntityDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationsRepository.delete(id);
  }
}