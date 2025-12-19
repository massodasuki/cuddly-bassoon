import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bApplyDateLpiEntity } from './ppv04b_apply_date_lpi.entity';
import { CreatePpv04bApplyDateLpiDto } from './dto/create-ppv04b_apply_date_lpi.dto';
import { UpdatePpv04bApplyDateLpiDto } from './dto/update-ppv04b_apply_date_lpi.dto';

@Injectable()
export class Ppv04bApplyDateLpiService {
  constructor(
    @InjectRepository(Ppv04bApplyDateLpiEntity)
    private ppv04bApplyDateLpiRepository: Repository<Ppv04bApplyDateLpiEntity>,
  ) {}

  findAll(): Promise<Ppv04bApplyDateLpiEntity[]> {
    return this.ppv04bApplyDateLpiRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bApplyDateLpiEntity> {
    const entity = await this.ppv04bApplyDateLpiRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bApplyDateLpiEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bApplyDateLpiDto: CreatePpv04bApplyDateLpiDto): Promise<Ppv04bApplyDateLpiEntity> {
    const entity = this.ppv04bApplyDateLpiRepository.create(createPpv04bApplyDateLpiDto);
    return this.ppv04bApplyDateLpiRepository.save(entity);
  }

  async update(id: string, updatePpv04bApplyDateLpiDto: UpdatePpv04bApplyDateLpiDto): Promise<Ppv04bApplyDateLpiEntity> {
    await this.ppv04bApplyDateLpiRepository.update(id, updatePpv04bApplyDateLpiDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bApplyDateLpiRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bApplyDateLpiEntity[]> {
    return this.ppv04bApplyDateLpiRepository.find({
      where: { application_id: applicationId }
    });
  }
}