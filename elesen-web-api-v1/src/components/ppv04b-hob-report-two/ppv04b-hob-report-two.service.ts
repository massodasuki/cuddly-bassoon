import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bHobReportTwoEntity } from './ppv04b-hob-report-two.entity';
import { CreatePpv04bHobReportTwoDto } from './dto/create-ppv04b-hob-report-two.dto';
import { UpdatePpv04bHobReportTwoDto } from './dto/update-ppv04b-hob-report-two.dto';

@Injectable()
export class Ppv04bHobReportTwoService {
  constructor(
    @InjectRepository(Ppv04bHobReportTwoEntity)
    private ppv04bHobReportTwoRepository: Repository<Ppv04bHobReportTwoEntity>,
  ) {}

  findAll(): Promise<Ppv04bHobReportTwoEntity[]> {
    return this.ppv04bHobReportTwoRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bHobReportTwoEntity> {
    const entity = await this.ppv04bHobReportTwoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bHobReportTwoEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bHobReportTwoDto: CreatePpv04bHobReportTwoDto): Promise<Ppv04bHobReportTwoEntity> {
    const entity = this.ppv04bHobReportTwoRepository.create(createPpv04bHobReportTwoDto);
    return this.ppv04bHobReportTwoRepository.save(entity);
  }

  async update(id: string, updatePpv04bHobReportTwoDto: UpdatePpv04bHobReportTwoDto): Promise<Ppv04bHobReportTwoEntity> {
    await this.ppv04bHobReportTwoRepository.update(id, updatePpv04bHobReportTwoDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bHobReportTwoRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bHobReportTwoEntity[]> {
    return this.ppv04bHobReportTwoRepository.find({
      where: { application_id: applicationId }
    });
  }
}