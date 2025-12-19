import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProcurementsEntity } from './procurements.entity';
import { CreateProcurementsDto } from './dto/create-procurements.dto';
import { UpdateProcurementsDto } from './dto/update-procurements.dto';

@Injectable()
export class ProcurementsService {
  constructor(
    @InjectRepository(ProcurementsEntity)
    private procurementsRepository: Repository<ProcurementsEntity>,
  ) {}

  findAll(): Promise<ProcurementsEntity[]> {
    return this.procurementsRepository.find();
  }

  async findOne(id: string): Promise<ProcurementsEntity> {
    const entity = await this.procurementsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ProcurementsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createProcurementsDto: CreateProcurementsDto): Promise<ProcurementsEntity> {
    const entity = this.procurementsRepository.create(createProcurementsDto);
    return this.procurementsRepository.save(entity);
  }

  async update(id: string, updateProcurementsDto: UpdateProcurementsDto): Promise<ProcurementsEntity> {
    await this.procurementsRepository.update(id, updateProcurementsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.procurementsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ProcurementsEntity[]> {
    return this.procurementsRepository.find({
      where: { application_id: applicationId }
    });
  }
}