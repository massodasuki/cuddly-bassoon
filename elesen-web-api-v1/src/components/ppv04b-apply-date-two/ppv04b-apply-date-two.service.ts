import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bApplyDateTwoEntity } from './ppv04b-apply-date-two.entity';
import { CreatePpv04bApplyDateTwoDto } from './dto/create-ppv04b-apply-date-two.dto';
import { UpdatePpv04bApplyDateTwoDto } from './dto/update-ppv04b-apply-date-two.dto';

@Injectable()
export class Ppv04bApplyDateTwoService {
  constructor(
    @InjectRepository(Ppv04bApplyDateTwoEntity)
    private ppv04bApplyDateTwoRepository: Repository<Ppv04bApplyDateTwoEntity>,
  ) {}

  findAll(): Promise<Ppv04bApplyDateTwoEntity[]> {
    return this.ppv04bApplyDateTwoRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bApplyDateTwoEntity> {
    const entity = await this.ppv04bApplyDateTwoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bApplyDateTwoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bApplyDateTwoDto: CreatePpv04bApplyDateTwoDto): Promise<Ppv04bApplyDateTwoEntity> {
    const entity = this.ppv04bApplyDateTwoRepository.create(createPpv04bApplyDateTwoDto);
    return this.ppv04bApplyDateTwoRepository.save(entity);
  }

  async update(id: string, updatePpv04bApplyDateTwoDto: UpdatePpv04bApplyDateTwoDto): Promise<Ppv04bApplyDateTwoEntity> {
    await this.ppv04bApplyDateTwoRepository.update(id, updatePpv04bApplyDateTwoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bApplyDateTwoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bApplyDateTwoEntity[]> {
    return this.ppv04bApplyDateTwoRepository.find({
      where: { application_id: applicationId }
    });
  }
}