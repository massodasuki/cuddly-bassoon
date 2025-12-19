import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bsEntity } from './ppv04bs.entity';
import { CreatePpv04bsDto } from './dto/create-ppv04bs.dto';
import { UpdatePpv04bsDto } from './dto/update-ppv04bs.dto';

@Injectable()
export class Ppv04bsService {
  constructor(
    @InjectRepository(Ppv04bsEntity)
    private ppv04bsRepository: Repository<Ppv04bsEntity>,
  ) {}

  findAll(): Promise<Ppv04bsEntity[]> {
    return this.ppv04bsRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bsEntity> {
    const entity = await this.ppv04bsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bsDto: CreatePpv04bsDto): Promise<Ppv04bsEntity> {
    const entity = this.ppv04bsRepository.create(createPpv04bsDto);
    return this.ppv04bsRepository.save(entity);
  }

  async update(id: string, updatePpv04bsDto: UpdatePpv04bsDto): Promise<Ppv04bsEntity> {
    await this.ppv04bsRepository.update(id, updatePpv04bsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bsEntity[]> {
    return this.ppv04bsRepository.find({
      where: { application_id: applicationId }
    });
  }
}