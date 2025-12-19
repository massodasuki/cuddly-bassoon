import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationChangeVesselToolEntity } from './application_change_vessel_tool.entity';
import { CreateApplicationChangeVesselToolDto } from './dto/create-application_change_vessel_tool.dto';
import { UpdateApplicationChangeVesselToolDto } from './dto/update-application_change_vessel_tool.dto';

@Injectable()
export class ApplicationChangeVesselToolService {
  constructor(
    @InjectRepository(ApplicationChangeVesselToolEntity)
    private applicationChangeVesselToolRepository: Repository<ApplicationChangeVesselToolEntity>,
  ) {}

  findAll(): Promise<ApplicationChangeVesselToolEntity[]> {
    return this.applicationChangeVesselToolRepository.find();
  }

  async findOne(id: string): Promise<ApplicationChangeVesselToolEntity> {
    const entity = await this.applicationChangeVesselToolRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationChangeVesselToolEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationChangeVesselToolDto: CreateApplicationChangeVesselToolDto): Promise<ApplicationChangeVesselToolEntity> {
    const entity = this.applicationChangeVesselToolRepository.create(createApplicationChangeVesselToolDto);
    return this.applicationChangeVesselToolRepository.save(entity);
  }

  async update(id: string, updateApplicationChangeVesselToolDto: UpdateApplicationChangeVesselToolDto): Promise<ApplicationChangeVesselToolEntity> {
    await this.applicationChangeVesselToolRepository.update(id, updateApplicationChangeVesselToolDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationChangeVesselToolRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationChangeVesselToolEntity[]> {
    return this.applicationChangeVesselToolRepository.find({
      where: { application_id: applicationId }
    });
  }
}