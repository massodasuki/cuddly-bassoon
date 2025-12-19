import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EshndBankChangeDocsEntity } from './eshnd_bank_change_docs.entity';
import { CreateEshndBankChangeDocsDto } from './dto/create-eshnd_bank_change_docs.dto';
import { UpdateEshndBankChangeDocsDto } from './dto/update-eshnd_bank_change_docs.dto';

@Injectable()
export class EshndBankChangeDocsService {
  constructor(
    @InjectRepository(EshndBankChangeDocsEntity)
    private eshndBankChangeDocsRepository: Repository<EshndBankChangeDocsEntity>,
  ) {}

  findAll(): Promise<EshndBankChangeDocsEntity[]> {
    return this.eshndBankChangeDocsRepository.find();
  }

  async findOne(id: string): Promise<EshndBankChangeDocsEntity> {
    const entity = await this.eshndBankChangeDocsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`EshndBankChangeDocsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createEshndBankChangeDocsDto: CreateEshndBankChangeDocsDto): Promise<EshndBankChangeDocsEntity> {
    const entity = this.eshndBankChangeDocsRepository.create(createEshndBankChangeDocsDto);
    return this.eshndBankChangeDocsRepository.save(entity);
  }

  async update(id: string, updateEshndBankChangeDocsDto: UpdateEshndBankChangeDocsDto): Promise<EshndBankChangeDocsEntity> {
    await this.eshndBankChangeDocsRepository.update(id, updateEshndBankChangeDocsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.eshndBankChangeDocsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<EshndBankChangeDocsEntity[]> {
    return this.eshndBankChangeDocsRepository.find({
      where: { application_id: applicationId }
    });
  }
}