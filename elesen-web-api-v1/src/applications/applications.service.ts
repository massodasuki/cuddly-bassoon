import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private applicationsRepository: Repository<Application>,
  ) {}

  findAll(): Promise<Application[]> {
    return this.applicationsRepository.find();
  }

  async findOne(id: string): Promise<Application> {
    const application = await this.applicationsRepository.findOneBy({ id });
    if (!application) {
      throw new Error('Application not found');
    }
    return application;
  }

  async create(createApplicationDto: CreateApplicationDto): Promise<Application> {
    const application = this.applicationsRepository.create(createApplicationDto);
    return this.applicationsRepository.save(application);
  }

  async update(id: string, updateApplicationDto: UpdateApplicationDto): Promise<Application> {
    await this.applicationsRepository.update(id, updateApplicationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationsRepository.delete(id);
  }
}