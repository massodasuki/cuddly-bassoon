import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApplicationPinEntity } from './application-pins.entity';
import { CreateApplicationPinDto } from './dto/create-application-pins.dto';
import { UpdateApplicationPinDto } from './dto/update-application-pins.dto';

@Injectable()
export class ApplicationPinService {
  constructor(
    @InjectRepository(ApplicationPinEntity)
    private applicationPinsRepository: Repository<ApplicationPinEntity>,
  ) {}

  findAll(): Promise<ApplicationPinEntity[]> {
    return this.applicationPinsRepository.find();
  }

  async findOne(id: string): Promise<ApplicationPinEntity> {
    const entity = await this.applicationPinsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ApplicationPinEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createApplicationPinDto: CreateApplicationPinDto): Promise<ApplicationPinEntity> {
    const applicationPin = this.applicationPinsRepository.create(createApplicationPinDto);
    return this.applicationPinsRepository.save(applicationPin);
  }

  async update(id: string, updateApplicationPinDto: UpdateApplicationPinDto): Promise<ApplicationPinEntity> {
    await this.applicationPinsRepository.update(id, updateApplicationPinDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.applicationPinsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<ApplicationPinEntity[]> {
    return this.applicationPinsRepository.find({
      where: { application_id: applicationId }
    });
  }
}