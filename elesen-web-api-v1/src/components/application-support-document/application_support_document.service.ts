import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationSupportDocumentEntity } from './application_support_document.entity';
import { CreateApplicationSupportDocumentDto } from './dto/create-application_support_document.dto';
import { UpdateApplicationSupportDocumentDto } from './dto/update-application_support_document.dto';

@Injectable()
export class ApplicationSupportDocumentService {
  constructor(
    @InjectRepository(ApplicationSupportDocumentEntity)
    private applicationSupportDocumentRepository: Repository<ApplicationSupportDocumentEntity>,
  ) {}

  findAll(): Promise<ApplicationSupportDocumentEntity[]> {
    return this.applicationSupportDocumentRepository.find();
  }

  async findOne(id: string): Promise<ApplicationSupportDocumentEntity> {
    const entity = await this.applicationSupportDocumentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationSupportDocumentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationSupportDocumentDto: CreateApplicationSupportDocumentDto): Promise<ApplicationSupportDocumentEntity> {
    const entity = this.applicationSupportDocumentRepository.create(createApplicationSupportDocumentDto);
    return this.applicationSupportDocumentRepository.save(entity);
  }

  async update(id: string, updateApplicationSupportDocumentDto: UpdateApplicationSupportDocumentDto): Promise<ApplicationSupportDocumentEntity> {
    await this.applicationSupportDocumentRepository.update(id, updateApplicationSupportDocumentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationSupportDocumentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationSupportDocumentEntity[]> {
    return this.applicationSupportDocumentRepository.find({
      where: { application_id: applicationId }
    });
  }
}