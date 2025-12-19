import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bCheckGaDocumentEntity } from './ppv04b-check-ga-document.entity';
import { CreatePpv04bCheckGaDocumentDto } from './dto/create-ppv04b-check-ga-document.dto';
import { UpdatePpv04bCheckGaDocumentDto } from './dto/update-ppv04b-check-ga-document.dto';

@Injectable()
export class Ppv04bCheckGaDocumentService {
  constructor(
    @InjectRepository(Ppv04bCheckGaDocumentEntity)
    private ppv04bCheckGaDocumentRepository: Repository<Ppv04bCheckGaDocumentEntity>,
  ) {}

  findAll(): Promise<Ppv04bCheckGaDocumentEntity[]> {
    return this.ppv04bCheckGaDocumentRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bCheckGaDocumentEntity> {
    const entity = await this.ppv04bCheckGaDocumentRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bCheckGaDocumentEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bCheckGaDocumentDto: CreatePpv04bCheckGaDocumentDto): Promise<Ppv04bCheckGaDocumentEntity> {
    const entity = this.ppv04bCheckGaDocumentRepository.create(createPpv04bCheckGaDocumentDto);
    return this.ppv04bCheckGaDocumentRepository.save(entity);
  }

  async update(id: string, updatePpv04bCheckGaDocumentDto: UpdatePpv04bCheckGaDocumentDto): Promise<Ppv04bCheckGaDocumentEntity> {
    await this.ppv04bCheckGaDocumentRepository.update(id, updatePpv04bCheckGaDocumentDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bCheckGaDocumentRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bCheckGaDocumentEntity[]> {
    return this.ppv04bCheckGaDocumentRepository.find({
      where: { application_id: applicationId }
    });
  }
}