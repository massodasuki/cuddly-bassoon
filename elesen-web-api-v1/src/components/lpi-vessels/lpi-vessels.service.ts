import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LpiVesselsEntity } from './lpi-vessels.entity';
import { CreateLpiVesselsDto } from './dto/create-lpi-vessels.dto';
import { UpdateLpiVesselsDto } from './dto/update-lpi-vessels.dto';

@Injectable()
export class LpiVesselsService {
  constructor(
    @InjectRepository(LpiVesselsEntity)
    private lpiVesselsRepository: Repository<LpiVesselsEntity>,
  ) {}

  findAll(): Promise<LpiVesselsEntity[]> {
    return this.lpiVesselsRepository.find();
  }

  async findOne(id: string): Promise<LpiVesselsEntity> {
    const entity = await this.lpiVesselsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`LpiVesselsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createLpiVesselsDto: CreateLpiVesselsDto): Promise<LpiVesselsEntity> {
    const entity = this.lpiVesselsRepository.create(createLpiVesselsDto);
    return this.lpiVesselsRepository.save(entity);
  }

  async update(id: string, updateLpiVesselsDto: UpdateLpiVesselsDto): Promise<LpiVesselsEntity> {
    await this.lpiVesselsRepository.update(id, updateLpiVesselsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.lpiVesselsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<LpiVesselsEntity[]> {
    return this.lpiVesselsRepository.find({
      where: { application_id: applicationId }
    });
  }
}