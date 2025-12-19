import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modules2Entity } from './modules2.entity';
import { CreateModules2Dto } from './dto/create-modules2.dto';
import { UpdateModules2Dto } from './dto/update-modules2.dto';

@Injectable()
export class Modules2Service {
  constructor(
    @InjectRepository(Modules2Entity)
    private modules2Repository: Repository<Modules2Entity>,
  ) {}

  findAll(): Promise<Modules2Entity[]> {
    return this.modules2Repository.find();
  }

  async findOne(id: string): Promise<Modules2Entity> {
    const entity = await this.modules2Repository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Modules2Entity with id ${id} not found`);
    }
    return entity;
  }

  async create(createModules2Dto: CreateModules2Dto): Promise<Modules2Entity> {
    const entity = this.modules2Repository.create(createModules2Dto);
    return this.modules2Repository.save(entity);
  }

  async update(id: string, updateModules2Dto: UpdateModules2Dto): Promise<Modules2Entity> {
    await this.modules2Repository.update(id, updateModules2Dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.modules2Repository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Modules2Entity[]> {
    return this.modules2Repository.find({
      where: { application_id: applicationId }
    });
  }
}