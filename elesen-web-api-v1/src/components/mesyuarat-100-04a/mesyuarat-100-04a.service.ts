import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesyuarat10004aEntity } from './mesyuarat-100-04a.entity';
import { CreateMesyuarat10004aDto } from './dto/create-mesyuarat-100-04a.dto';
import { UpdateMesyuarat10004aDto } from './dto/update-mesyuarat-100-04a.dto';

@Injectable()
export class Mesyuarat10004aService {
  constructor(
    @InjectRepository(Mesyuarat10004aEntity)
    private mesyuarat10004aRepository: Repository<Mesyuarat10004aEntity>,
  ) {}

  findAll(): Promise<Mesyuarat10004aEntity[]> {
    return this.mesyuarat10004aRepository.find();
  }

  async findOne(id: string): Promise<Mesyuarat10004aEntity> {
    const entity = await this.mesyuarat10004aRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Mesyuarat10004aEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMesyuarat10004aDto: CreateMesyuarat10004aDto): Promise<Mesyuarat10004aEntity> {
    const entity = this.mesyuarat10004aRepository.create(createMesyuarat10004aDto);
    return this.mesyuarat10004aRepository.save(entity);
  }

  async update(id: string, updateMesyuarat10004aDto: UpdateMesyuarat10004aDto): Promise<Mesyuarat10004aEntity> {
    await this.mesyuarat10004aRepository.update(id, updateMesyuarat10004aDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mesyuarat10004aRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Mesyuarat10004aEntity[]> {
    return this.mesyuarat10004aRepository.find({
      where: { application_id: applicationId }
    });
  }
}