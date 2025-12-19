import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseTransferLogsEntity } from './base-transfer-logs.entity';
import { CreateBaseTransferLogsDto } from './dto/create-base-transfer-logs.dto';
import { UpdateBaseTransferLogsDto } from './dto/update-base-transfer-logs.dto';

@Injectable()
export class BaseTransferLogsService {
  constructor(
    @InjectRepository(BaseTransferLogsEntity)
    private baseTransferLogsRepository: Repository<BaseTransferLogsEntity>,
  ) {}

  findAll(): Promise<BaseTransferLogsEntity[]> {
    return this.baseTransferLogsRepository.find();
  }

  async findOne(id: string): Promise<BaseTransferLogsEntity> {
    const entity = await this.baseTransferLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`BaseTransferLogsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createBaseTransferLogsDto: CreateBaseTransferLogsDto): Promise<BaseTransferLogsEntity> {
    const entity = this.baseTransferLogsRepository.create(createBaseTransferLogsDto);
    return this.baseTransferLogsRepository.save(entity);
  }

  async update(id: string, updateBaseTransferLogsDto: UpdateBaseTransferLogsDto): Promise<BaseTransferLogsEntity> {
    await this.baseTransferLogsRepository.update(id, updateBaseTransferLogsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.baseTransferLogsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<BaseTransferLogsEntity[]> {
    return this.baseTransferLogsRepository.find({
      where: { application_id: applicationId }
    });
  }
}