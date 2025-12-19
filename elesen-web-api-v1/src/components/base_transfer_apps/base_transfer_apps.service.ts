import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseTransferAppsEntity } from './base_transfer_apps.entity';
import { CreateBaseTransferAppsDto } from './dto/create-base_transfer_apps.dto';
import { UpdateBaseTransferAppsDto } from './dto/update-base_transfer_apps.dto';

@Injectable()
export class BaseTransferAppsService {
  constructor(
    @InjectRepository(BaseTransferAppsEntity)
    private baseTransferAppsRepository: Repository<BaseTransferAppsEntity>,
  ) {}

  findAll(): Promise<BaseTransferAppsEntity[]> {
    return this.baseTransferAppsRepository.find();
  }

  async findOne(id: string): Promise<BaseTransferAppsEntity> {
    const entity = await this.baseTransferAppsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`BaseTransferAppsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createBaseTransferAppsDto: CreateBaseTransferAppsDto): Promise<BaseTransferAppsEntity> {
    const entity = this.baseTransferAppsRepository.create(createBaseTransferAppsDto);
    return this.baseTransferAppsRepository.save(entity);
  }

  async update(id: string, updateBaseTransferAppsDto: UpdateBaseTransferAppsDto): Promise<BaseTransferAppsEntity> {
    await this.baseTransferAppsRepository.update(id, updateBaseTransferAppsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.baseTransferAppsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<BaseTransferAppsEntity[]> {
    return this.baseTransferAppsRepository.find({
      where: { application_id: applicationId }
    });
  }
}