import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationDocumentsEntity } from './application_documents.entity';
import { CreateApplicationDocumentsDto } from './dto/create-application_documents.dto';
import { UpdateApplicationDocumentsDto } from './dto/update-application_documents.dto';

@Injectable()
export class ApplicationDocumentsService {
  constructor(
    @InjectRepository(ApplicationDocumentsEntity)
    private applicationDocumentsRepository: Repository<ApplicationDocumentsEntity>,
  ) {}

  findAll(): Promise<ApplicationDocumentsEntity[]> {
    return this.applicationDocumentsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationDocumentsEntity> {
    const entity = await this.applicationDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationDocumentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationDocumentsDto: CreateApplicationDocumentsDto): Promise<ApplicationDocumentsEntity> {
    const entity = this.applicationDocumentsRepository.create(createApplicationDocumentsDto);
    return this.applicationDocumentsRepository.save(entity);
  }

  async update(id: string, updateApplicationDocumentsDto: UpdateApplicationDocumentsDto): Promise<ApplicationDocumentsEntity> {
    await this.applicationDocumentsRepository.update(id, updateApplicationDocumentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationDocumentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationDocumentsEntity[]> {
    return this.applicationDocumentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}