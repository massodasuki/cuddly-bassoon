import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bMailInspectionOneEntity } from './ppv04b_mail_inspection_one.entity';
import { CreatePpv04bMailInspectionOneDto } from './dto/create-ppv04b_mail_inspection_one.dto';
import { UpdatePpv04bMailInspectionOneDto } from './dto/update-ppv04b_mail_inspection_one.dto';

@Injectable()
export class Ppv04bMailInspectionOneService {
  constructor(
    @InjectRepository(Ppv04bMailInspectionOneEntity)
    private ppv04bMailInspectionOneRepository: Repository<Ppv04bMailInspectionOneEntity>,
  ) {}

  findAll(): Promise<Ppv04bMailInspectionOneEntity[]> {
    return this.ppv04bMailInspectionOneRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bMailInspectionOneEntity> {
    const entity = await this.ppv04bMailInspectionOneRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bMailInspectionOneEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bMailInspectionOneDto: CreatePpv04bMailInspectionOneDto): Promise<Ppv04bMailInspectionOneEntity> {
    const entity = this.ppv04bMailInspectionOneRepository.create(createPpv04bMailInspectionOneDto);
    return this.ppv04bMailInspectionOneRepository.save(entity);
  }

  async update(id: string, updatePpv04bMailInspectionOneDto: UpdatePpv04bMailInspectionOneDto): Promise<Ppv04bMailInspectionOneEntity> {
    await this.ppv04bMailInspectionOneRepository.update(id, updatePpv04bMailInspectionOneDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bMailInspectionOneRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bMailInspectionOneEntity[]> {
    return this.ppv04bMailInspectionOneRepository.find({
      where: { application_id: applicationId }
    });
  }
}