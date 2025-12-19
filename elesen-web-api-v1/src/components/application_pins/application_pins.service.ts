import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationPinsEntity } from './application_pins.entity';
import { CreateApplicationPinsDto } from './dto/create-application_pins.dto';
import { UpdateApplicationPinsDto } from './dto/update-application_pins.dto';

@Injectable()
export class ApplicationPinsService {
  constructor(
    @InjectRepository(ApplicationPinsEntity)
    private applicationPinsRepository: Repository<ApplicationPinsEntity>,
  ) {}

  findAll(): Promise<ApplicationPinsEntity[]> {
    return this.applicationPinsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationPinsEntity> {
    const entity = await this.applicationPinsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationPinsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationPinsDto: CreateApplicationPinsDto): Promise<ApplicationPinsEntity> {
    const entity = this.applicationPinsRepository.create(createApplicationPinsDto);
    return this.applicationPinsRepository.save(entity);
  }

  async update(id: string, updateApplicationPinsDto: UpdateApplicationPinsDto): Promise<ApplicationPinsEntity> {
    await this.applicationPinsRepository.update(id, updateApplicationPinsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationPinsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationPinsEntity[]> {
    return this.applicationPinsRepository.find({
      where: { application_id: applicationId }
    });
  }
}