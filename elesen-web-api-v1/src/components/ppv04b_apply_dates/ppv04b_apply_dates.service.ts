import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bApplyDatesEntity } from './ppv04b_apply_dates.entity';
import { CreatePpv04bApplyDatesDto } from './dto/create-ppv04b_apply_dates.dto';
import { UpdatePpv04bApplyDatesDto } from './dto/update-ppv04b_apply_dates.dto';

@Injectable()
export class Ppv04bApplyDatesService {
  constructor(
    @InjectRepository(Ppv04bApplyDatesEntity)
    private ppv04bApplyDatesRepository: Repository<Ppv04bApplyDatesEntity>,
  ) {}

  findAll(): Promise<Ppv04bApplyDatesEntity[]> {
    return this.ppv04bApplyDatesRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bApplyDatesEntity> {
    const entity = await this.ppv04bApplyDatesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bApplyDatesEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bApplyDatesDto: CreatePpv04bApplyDatesDto): Promise<Ppv04bApplyDatesEntity> {
    const entity = this.ppv04bApplyDatesRepository.create(createPpv04bApplyDatesDto);
    return this.ppv04bApplyDatesRepository.save(entity);
  }

  async update(id: string, updatePpv04bApplyDatesDto: UpdatePpv04bApplyDatesDto): Promise<Ppv04bApplyDatesEntity> {
    await this.ppv04bApplyDatesRepository.update(id, updatePpv04bApplyDatesDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bApplyDatesRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bApplyDatesEntity[]> {
    return this.ppv04bApplyDatesRepository.find({
      where: { application_id: applicationId }
    });
  }
}