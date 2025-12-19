import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationTpuReceiptItemsEntity } from './application-tpu-receipt-items.entity';
import { CreateApplicationTpuReceiptItemsDto } from './dto/create-application-tpu-receipt-items.dto';
import { UpdateApplicationTpuReceiptItemsDto } from './dto/update-application-tpu-receipt-items.dto';

@Injectable()
export class ApplicationTpuReceiptItemsService {
  constructor(
    @InjectRepository(ApplicationTpuReceiptItemsEntity)
    private applicationTpuReceiptItemsRepository: Repository<ApplicationTpuReceiptItemsEntity>,
  ) {}

  findAll(): Promise<ApplicationTpuReceiptItemsEntity[]> {
    return this.applicationTpuReceiptItemsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationTpuReceiptItemsEntity> {
    const entity = await this.applicationTpuReceiptItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationTpuReceiptItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationTpuReceiptItemsDto: CreateApplicationTpuReceiptItemsDto): Promise<ApplicationTpuReceiptItemsEntity> {
    const entity = this.applicationTpuReceiptItemsRepository.create(createApplicationTpuReceiptItemsDto);
    return this.applicationTpuReceiptItemsRepository.save(entity);
  }

  async update(id: string, updateApplicationTpuReceiptItemsDto: UpdateApplicationTpuReceiptItemsDto): Promise<ApplicationTpuReceiptItemsEntity> {
    await this.applicationTpuReceiptItemsRepository.update(id, updateApplicationTpuReceiptItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationTpuReceiptItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationTpuReceiptItemsEntity[]> {
    return this.applicationTpuReceiptItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}