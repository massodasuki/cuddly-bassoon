import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzPermohonanReceiptsEntity } from './tz-permohonan-receipts.entity';
import { CreateTzPermohonanReceiptsDto } from './dto/create-tz-permohonan-receipts.dto';
import { UpdateTzPermohonanReceiptsDto } from './dto/update-tz-permohonan-receipts.dto';

@Injectable()
export class TzPermohonanReceiptsService {
  constructor(
    @InjectRepository(TzPermohonanReceiptsEntity)
    private tzPermohonanReceiptsRepository: Repository<TzPermohonanReceiptsEntity>,
  ) {}

  findAll(): Promise<TzPermohonanReceiptsEntity[]> {
    return this.tzPermohonanReceiptsRepository.find();
  }

  async findOne(id: string): Promise<TzPermohonanReceiptsEntity> {
    const entity = await this.tzPermohonanReceiptsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzPermohonanReceiptsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzPermohonanReceiptsDto: CreateTzPermohonanReceiptsDto): Promise<TzPermohonanReceiptsEntity> {
    const entity = this.tzPermohonanReceiptsRepository.create(createTzPermohonanReceiptsDto);
    return this.tzPermohonanReceiptsRepository.save(entity);
  }

  async update(id: string, updateTzPermohonanReceiptsDto: UpdateTzPermohonanReceiptsDto): Promise<TzPermohonanReceiptsEntity> {
    await this.tzPermohonanReceiptsRepository.update(id, updateTzPermohonanReceiptsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzPermohonanReceiptsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzPermohonanReceiptsEntity[]> {
    return this.tzPermohonanReceiptsRepository.find({
      where: { application_id: applicationId }
    });
  }
}