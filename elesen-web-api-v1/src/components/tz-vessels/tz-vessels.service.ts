import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TzVesselsEntity } from './tz-vessels.entity';
import { CreateTzVesselsDto } from './dto/create-tz-vessels.dto';
import { UpdateTzVesselsDto } from './dto/update-tz-vessels.dto';

@Injectable()
export class TzVesselsService {
  constructor(
    @InjectRepository(TzVesselsEntity)
    private tzVesselsRepository: Repository<TzVesselsEntity>,
  ) {}

  findAll(): Promise<TzVesselsEntity[]> {
    return this.tzVesselsRepository.find();
  }

  async findOne(id: string): Promise<TzVesselsEntity> {
    const entity = await this.tzVesselsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`TzVesselsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createTzVesselsDto: CreateTzVesselsDto): Promise<TzVesselsEntity> {
    const entity = this.tzVesselsRepository.create(createTzVesselsDto);
    return this.tzVesselsRepository.save(entity);
  }

  async update(id: string, updateTzVesselsDto: UpdateTzVesselsDto): Promise<TzVesselsEntity> {
    await this.tzVesselsRepository.update(id, updateTzVesselsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tzVesselsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<TzVesselsEntity[]> {
    return this.tzVesselsRepository.find({
      where: { application_id: applicationId }
    });
  }
}