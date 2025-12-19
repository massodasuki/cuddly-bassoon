import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanReceiptItemsEntity } from './tz_permohonan_receipt_items.entity';
import { CreateTzPermohonanReceiptItemsDto } from './dto/create-tz_permohonan_receipt_items.dto';
import { UpdateTzPermohonanReceiptItemsDto } from './dto/update-tz_permohonan_receipt_items.dto';

@Injectable()
export class TzPermohonanReceiptItemsService {
  constructor(
    @InjectRepository(TzPermohonanReceiptItemsEntity)
    private tzPermohonanReceiptItemsRepository: Repository<TzPermohonanReceiptItemsEntity>,
  ) {}

  findAll(): Promise<TzPermohonanReceiptItemsEntity[]> {
    return this.tzPermohonanReceiptItemsRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanReceiptItemsEntity> {
    const entity = await this.tzPermohonanReceiptItemsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanReceiptItemsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanReceiptItemsDto: CreateTzPermohonanReceiptItemsDto): Promise<TzPermohonanReceiptItemsEntity> {
    const entity = this.tzPermohonanReceiptItemsRepository.create(createTzPermohonanReceiptItemsDto);
    return this.tzPermohonanReceiptItemsRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanReceiptItemsDto: UpdateTzPermohonanReceiptItemsDto): Promise<TzPermohonanReceiptItemsEntity> {
    await this.tzPermohonanReceiptItemsRepository.update(id, updateTzPermohonanReceiptItemsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanReceiptItemsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanReceiptItemsEntity[]> {
    return this.tzPermohonanReceiptItemsRepository.find({
      where: { application_id: applicationId }
    });
  }
}