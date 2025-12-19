import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesyuarat5004aEntity } from './mesyuarat-50-04a.entity';
import { CreateMesyuarat5004aDto } from './dto/create-mesyuarat-50-04a.dto';
import { UpdateMesyuarat5004aDto } from './dto/update-mesyuarat-50-04a.dto';

@Injectable()
export class Mesyuarat5004aService {
  constructor(
    @InjectRepository(Mesyuarat5004aEntity)
    private mesyuarat5004aRepository: Repository<Mesyuarat5004aEntity>,
  ) {}

  findAll(): Promise<Mesyuarat5004aEntity[]> {
    return this.mesyuarat5004aRepository.find();
  }

  async findOne(id: string): Promise<Mesyuarat5004aEntity> {
    const entity = await this.mesyuarat5004aRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Mesyuarat5004aEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMesyuarat5004aDto: CreateMesyuarat5004aDto): Promise<Mesyuarat5004aEntity> {
    const entity = this.mesyuarat5004aRepository.create(createMesyuarat5004aDto);
    return this.mesyuarat5004aRepository.save(entity);
  }

  async update(id: string, updateMesyuarat5004aDto: UpdateMesyuarat5004aDto): Promise<Mesyuarat5004aEntity> {
    await this.mesyuarat5004aRepository.update(id, updateMesyuarat5004aDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mesyuarat5004aRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Mesyuarat5004aEntity[]> {
    return this.mesyuarat5004aRepository.find({
      where: { application_id: applicationId }
    });
  }
}