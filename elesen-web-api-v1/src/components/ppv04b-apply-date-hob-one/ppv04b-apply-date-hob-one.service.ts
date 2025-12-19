import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bApplyDateHobOneEntity } from './ppv04b-apply-date-hob-one.entity';
import { CreatePpv04bApplyDateHobOneDto } from './dto/create-ppv04b-apply-date-hob-one.dto';
import { UpdatePpv04bApplyDateHobOneDto } from './dto/update-ppv04b-apply-date-hob-one.dto';

@Injectable()
export class Ppv04bApplyDateHobOneService {
  constructor(
    @InjectRepository(Ppv04bApplyDateHobOneEntity)
    private ppv04bApplyDateHobOneRepository: Repository<Ppv04bApplyDateHobOneEntity>,
  ) {}

  findAll(): Promise<Ppv04bApplyDateHobOneEntity[]> {
    return this.ppv04bApplyDateHobOneRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bApplyDateHobOneEntity> {
    const entity = await this.ppv04bApplyDateHobOneRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bApplyDateHobOneEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bApplyDateHobOneDto: CreatePpv04bApplyDateHobOneDto): Promise<Ppv04bApplyDateHobOneEntity> {
    const entity = this.ppv04bApplyDateHobOneRepository.create(createPpv04bApplyDateHobOneDto);
    return this.ppv04bApplyDateHobOneRepository.save(entity);
  }

  async update(id: string, updatePpv04bApplyDateHobOneDto: UpdatePpv04bApplyDateHobOneDto): Promise<Ppv04bApplyDateHobOneEntity> {
    await this.ppv04bApplyDateHobOneRepository.update(id, updatePpv04bApplyDateHobOneDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bApplyDateHobOneRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bApplyDateHobOneEntity[]> {
    return this.ppv04bApplyDateHobOneRepository.find({
      where: { application_id: applicationId }
    });
  }
}