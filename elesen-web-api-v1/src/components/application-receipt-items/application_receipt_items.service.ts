import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationReceiptItemsEntity } from './application_receipt_items.entity';
import { CreateApplicationReceiptItemsDto } from './dto/create-application_receipt_items.dto';
import { UpdateApplicationReceiptItemsDto } from './dto/update-application_receipt_items.dto';

@Injectable()
export class ApplicationReceiptItemsService {
  constructor(
    @InjectRepository(ApplicationReceiptItemsEntity)
    private applicationReceiptItemsRepository: Repository<ApplicationReceiptItemsEntity>,
  ) {}

  findAll(): Promise<ApplicationReceiptItemsEntity[]> {
    return this.applicationReceiptItemsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationReceiptItemsEntity> {
    const entity = await this.applicationReceiptItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationReceiptItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationReceiptItemsDto: CreateApplicationReceiptItemsDto): Promise<ApplicationReceiptItemsEntity> {
    const entity = this.applicationReceiptItemsRepository.create(createApplicationReceiptItemsDto);
    return this.applicationReceiptItemsRepository.save(entity);
  }

  async update(id: string, updateApplicationReceiptItemsDto: UpdateApplicationReceiptItemsDto): Promise<ApplicationReceiptItemsEntity> {
    await this.applicationReceiptItemsRepository.update(id, updateApplicationReceiptItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationReceiptItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationReceiptItemsEntity[]> {
    return this.applicationReceiptItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}