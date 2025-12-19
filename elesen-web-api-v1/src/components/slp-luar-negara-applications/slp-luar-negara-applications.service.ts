import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SlpLuarNegaraApplicationsEntity } from './slp-luar-negara-applications.entity';
import { CreateSlpLuarNegaraApplicationsDto } from './dto/create-slp-luar-negara-applications.dto';
import { UpdateSlpLuarNegaraApplicationsDto } from './dto/update-slp-luar-negara-applications.dto';

@Injectable()
export class SlpLuarNegaraApplicationsService {
  constructor(
    @InjectRepository(SlpLuarNegaraApplicationsEntity)
    private slpLuarNegaraApplicationsRepository: Repository<SlpLuarNegaraApplicationsEntity>,
  ) {}

  findAll(): Promise<SlpLuarNegaraApplicationsEntity[]> {
    return this.slpLuarNegaraApplicationsRepository.find();
  }

  async findOne(id: string): Promise<SlpLuarNegaraApplicationsEntity> {
    const entity = await this.slpLuarNegaraApplicationsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SlpLuarNegaraApplicationsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createSlpLuarNegaraApplicationsDto: CreateSlpLuarNegaraApplicationsDto): Promise<SlpLuarNegaraApplicationsEntity> {
    const entity = this.slpLuarNegaraApplicationsRepository.create(createSlpLuarNegaraApplicationsDto);
    return this.slpLuarNegaraApplicationsRepository.save(entity);
  }

  async update(id: string, updateSlpLuarNegaraApplicationsDto: UpdateSlpLuarNegaraApplicationsDto): Promise<SlpLuarNegaraApplicationsEntity> {
    await this.slpLuarNegaraApplicationsRepository.update(id, updateSlpLuarNegaraApplicationsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.slpLuarNegaraApplicationsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<SlpLuarNegaraApplicationsEntity[]> {
    return this.slpLuarNegaraApplicationsRepository.find({
      where: { application_id: applicationId }
    });
  }
}