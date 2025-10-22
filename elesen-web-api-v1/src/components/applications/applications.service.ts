import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationEntity } from './application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

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
      throw new Error('Application not found');
    }
    return application;
  }

  async create(createApplicationDto: CreateApplicationDto): Promise<ApplicationEntity> {
    const application = this.applicationsRepository.create(createApplicationDto);
    return this.applicationsRepository.save(application);
  }

  async update(id: string, updateApplicationDto: UpdateApplicationDto): Promise<ApplicationEntity> {
    await this.applicationsRepository.update(id, updateApplicationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationsRepository.delete(id);
  }
}