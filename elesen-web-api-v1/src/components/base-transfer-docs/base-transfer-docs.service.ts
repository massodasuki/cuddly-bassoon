import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseTransferDocsEntity } from './base-transfer-docs.entity';
import { CreateBaseTransferDocsDto } from './dto/create-base-transfer-docs.dto';
import { UpdateBaseTransferDocsDto } from './dto/update-base-transfer-docs.dto';

@Injectable()
export class BaseTransferDocsService {
  constructor(
    @InjectRepository(BaseTransferDocsEntity)
    private baseTransferDocsRepository: Repository<BaseTransferDocsEntity>,
  ) {}

  findAll(): Promise<BaseTransferDocsEntity[]> {
    return this.baseTransferDocsRepository.find();
  }

  async findOne(id: string): Promise<BaseTransferDocsEntity> {
    const entity = await this.baseTransferDocsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`BaseTransferDocsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createBaseTransferDocsDto: CreateBaseTransferDocsDto): Promise<BaseTransferDocsEntity> {
    const entity = this.baseTransferDocsRepository.create(createBaseTransferDocsDto);
    return this.baseTransferDocsRepository.save(entity);
  }

  async update(id: string, updateBaseTransferDocsDto: UpdateBaseTransferDocsDto): Promise<BaseTransferDocsEntity> {
    await this.baseTransferDocsRepository.update(id, updateBaseTransferDocsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.baseTransferDocsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<BaseTransferDocsEntity[]> {
    return this.baseTransferDocsRepository.find({
      where: { application_id: applicationId }
    });
  }
}