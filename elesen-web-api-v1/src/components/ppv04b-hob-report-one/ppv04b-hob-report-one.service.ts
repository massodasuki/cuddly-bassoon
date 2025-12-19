import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bHobReportOneEntity } from './ppv04b-hob-report-one.entity';
import { CreatePpv04bHobReportOneDto } from './dto/create-ppv04b-hob-report-one.dto';
import { UpdatePpv04bHobReportOneDto } from './dto/update-ppv04b-hob-report-one.dto';

@Injectable()
export class Ppv04bHobReportOneService {
  constructor(
    @InjectRepository(Ppv04bHobReportOneEntity)
    private ppv04bHobReportOneRepository: Repository<Ppv04bHobReportOneEntity>,
  ) {}

  findAll(): Promise<Ppv04bHobReportOneEntity[]> {
    return this.ppv04bHobReportOneRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bHobReportOneEntity> {
    const entity = await this.ppv04bHobReportOneRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bHobReportOneEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bHobReportOneDto: CreatePpv04bHobReportOneDto): Promise<Ppv04bHobReportOneEntity> {
    const entity = this.ppv04bHobReportOneRepository.create(createPpv04bHobReportOneDto);
    return this.ppv04bHobReportOneRepository.save(entity);
  }

  async update(id: string, updatePpv04bHobReportOneDto: UpdatePpv04bHobReportOneDto): Promise<Ppv04bHobReportOneEntity> {
    await this.ppv04bHobReportOneRepository.update(id, updatePpv04bHobReportOneDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bHobReportOneRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bHobReportOneEntity[]> {
    return this.ppv04bHobReportOneRepository.find({
      where: { application_id: applicationId }
    });
  }
}