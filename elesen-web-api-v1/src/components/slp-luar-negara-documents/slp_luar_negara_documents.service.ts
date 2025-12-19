import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpLuarNegaraDocumentsEntity } from './slp_luar_negara_documents.entity';
import { CreateSlpLuarNegaraDocumentsDto } from './dto/create-slp_luar_negara_documents.dto';
import { UpdateSlpLuarNegaraDocumentsDto } from './dto/update-slp_luar_negara_documents.dto';

@Injectable()
export class SlpLuarNegaraDocumentsService {
  constructor(
    @InjectRepository(SlpLuarNegaraDocumentsEntity)
    private slpLuarNegaraDocumentsRepository: Repository<SlpLuarNegaraDocumentsEntity>,
  ) {}

  findAll(): Promise<SlpLuarNegaraDocumentsEntity[]> {
    return this.slpLuarNegaraDocumentsRepository.find();
  }

  async findOne(id: string): Promise<SlpLuarNegaraDocumentsEntity> {
    const entity = await this.slpLuarNegaraDocumentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpLuarNegaraDocumentsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpLuarNegaraDocumentsDto: CreateSlpLuarNegaraDocumentsDto): Promise<SlpLuarNegaraDocumentsEntity> {
    const entity = this.slpLuarNegaraDocumentsRepository.create(createSlpLuarNegaraDocumentsDto);
    return this.slpLuarNegaraDocumentsRepository.save(entity);
  }

  async update(id: string, updateSlpLuarNegaraDocumentsDto: UpdateSlpLuarNegaraDocumentsDto): Promise<SlpLuarNegaraDocumentsEntity> {
    await this.slpLuarNegaraDocumentsRepository.update(id, updateSlpLuarNegaraDocumentsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpLuarNegaraDocumentsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpLuarNegaraDocumentsEntity[]> {
    return this.slpLuarNegaraDocumentsRepository.find({
      where: { application_id: applicationId }
    });
  }
}