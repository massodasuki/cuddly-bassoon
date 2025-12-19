import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SyaratSsdEntity } from './syarat-ssd.entity';
import { CreateSyaratSsdDto } from './dto/create-syarat-ssd.dto';
import { UpdateSyaratSsdDto } from './dto/update-syarat-ssd.dto';

@Injectable()
export class SyaratSsdService {
  constructor(
    @InjectRepository(SyaratSsdEntity)
    private syaratSsdRepository: Repository<SyaratSsdEntity>,
  ) {}

  findAll(): Promise<SyaratSsdEntity[]> {
    return this.syaratSsdRepository.find();
  }

  async findOne(id: string): Promise<SyaratSsdEntity> {
    const entity = await this.syaratSsdRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SyaratSsdEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSyaratSsdDto: CreateSyaratSsdDto): Promise<SyaratSsdEntity> {
    const entity = this.syaratSsdRepository.create(createSyaratSsdDto);
    return this.syaratSsdRepository.save(entity);
  }

  async update(id: string, updateSyaratSsdDto: UpdateSyaratSsdDto): Promise<SyaratSsdEntity> {
    await this.syaratSsdRepository.update(id, updateSyaratSsdDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.syaratSsdRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SyaratSsdEntity[]> {
    return this.syaratSsdRepository.find({
      where: { application_id: applicationId }
    });
  }
}