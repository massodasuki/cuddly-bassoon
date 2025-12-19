import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselApplicationEntity } from './ppv04a-vessel-application.entity';
import { CreatePpv04aVesselApplicationDto } from './dto/create-ppv04a-vessel-application.dto';
import { UpdatePpv04aVesselApplicationDto } from './dto/update-ppv04a-vessel-application.dto';

@Injectable()
export class Ppv04aVesselApplicationService {
  constructor(
    @InjectRepository(Ppv04aVesselApplicationEntity)
    private ppv04aVesselApplicationRepository: Repository<Ppv04aVesselApplicationEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselApplicationEntity[]> {
    return this.ppv04aVesselApplicationRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselApplicationEntity> {
    const entity = await this.ppv04aVesselApplicationRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselApplicationEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselApplicationDto: CreatePpv04aVesselApplicationDto): Promise<Ppv04aVesselApplicationEntity> {
    const entity = this.ppv04aVesselApplicationRepository.create(createPpv04aVesselApplicationDto);
    return this.ppv04aVesselApplicationRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselApplicationDto: UpdatePpv04aVesselApplicationDto): Promise<Ppv04aVesselApplicationEntity> {
    await this.ppv04aVesselApplicationRepository.update(id, updatePpv04aVesselApplicationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselApplicationRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselApplicationEntity[]> {
    return this.ppv04aVesselApplicationRepository.find({
      where: { application_id: applicationId }
    });
  }
}