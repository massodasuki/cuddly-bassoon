import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bCheck212Entity } from './ppv04b-check-212.entity';
import { CreatePpv04bCheck212Dto } from './dto/create-ppv04b-check-212.dto';
import { UpdatePpv04bCheck212Dto } from './dto/update-ppv04b-check-212.dto';

@Injectable()
export class Ppv04bCheck212Service {
  constructor(
    @InjectRepository(Ppv04bCheck212Entity)
    private ppv04bCheck212Repository: Repository<Ppv04bCheck212Entity>,
  ) {}

  findAll(): Promise<Ppv04bCheck212Entity[]> {
    return this.ppv04bCheck212Repository.find();
  }

  async findOne(id: string): Promise<Ppv04bCheck212Entity> {
    const entity = await this.ppv04bCheck212Repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bCheck212Entity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bCheck212Dto: CreatePpv04bCheck212Dto): Promise<Ppv04bCheck212Entity> {
    const entity = this.ppv04bCheck212Repository.create(createPpv04bCheck212Dto);
    return this.ppv04bCheck212Repository.save(entity);
  }

  async update(id: string, updatePpv04bCheck212Dto: UpdatePpv04bCheck212Dto): Promise<Ppv04bCheck212Entity> {
    await this.ppv04bCheck212Repository.update(id, updatePpv04bCheck212Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bCheck212Repository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bCheck212Entity[]> {
    return this.ppv04bCheck212Repository.find({
      where: { application_id: applicationId }
    });
  }
}