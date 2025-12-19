import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpDomestikApplicationsEntity } from './slp-domestik-applications.entity';
import { CreateSlpDomestikApplicationsDto } from './dto/create-slp-domestik-applications.dto';
import { UpdateSlpDomestikApplicationsDto } from './dto/update-slp-domestik-applications.dto';

@Injectable()
export class SlpDomestikApplicationsService {
  constructor(
    @InjectRepository(SlpDomestikApplicationsEntity)
    private slpDomestikApplicationsRepository: Repository<SlpDomestikApplicationsEntity>,
  ) {}

  findAll(): Promise<SlpDomestikApplicationsEntity[]> {
    return this.slpDomestikApplicationsRepository.find();
  }

  async findOne(id: string): Promise<SlpDomestikApplicationsEntity> {
    const entity = await this.slpDomestikApplicationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpDomestikApplicationsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpDomestikApplicationsDto: CreateSlpDomestikApplicationsDto): Promise<SlpDomestikApplicationsEntity> {
    const entity = this.slpDomestikApplicationsRepository.create(createSlpDomestikApplicationsDto);
    return this.slpDomestikApplicationsRepository.save(entity);
  }

  async update(id: string, updateSlpDomestikApplicationsDto: UpdateSlpDomestikApplicationsDto): Promise<SlpDomestikApplicationsEntity> {
    await this.slpDomestikApplicationsRepository.update(id, updateSlpDomestikApplicationsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpDomestikApplicationsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpDomestikApplicationsEntity[]> {
    return this.slpDomestikApplicationsRepository.find({
      where: { application_id: applicationId }
    });
  }
}