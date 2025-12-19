import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permohonan04aEntity } from './permohonan-04a.entity';
import { CreatePermohonan04aDto } from './dto/create-permohonan-04a.dto';
import { UpdatePermohonan04aDto } from './dto/update-permohonan-04a.dto';

@Injectable()
export class Permohonan04aService {
  constructor(
    @InjectRepository(Permohonan04aEntity)
    private permohonan04aRepository: Repository<Permohonan04aEntity>,
  ) {}

  findAll(): Promise<Permohonan04aEntity[]> {
    return this.permohonan04aRepository.find();
  }

  async findOne(id: string): Promise<Permohonan04aEntity> {
    const entity = await this.permohonan04aRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Permohonan04aEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPermohonan04aDto: CreatePermohonan04aDto): Promise<Permohonan04aEntity> {
    const entity = this.permohonan04aRepository.create(createPermohonan04aDto);
    return this.permohonan04aRepository.save(entity);
  }

  async update(id: string, updatePermohonan04aDto: UpdatePermohonan04aDto): Promise<Permohonan04aEntity> {
    await this.permohonan04aRepository.update(id, updatePermohonan04aDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.permohonan04aRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Permohonan04aEntity[]> {
    return this.permohonan04aRepository.find({
      where: { application_id: applicationId }
    });
  }
}