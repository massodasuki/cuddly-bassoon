import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselSlpEntity } from './ppv04a-vessel-slp.entity';
import { CreatePpv04aVesselSlpDto } from './dto/create-ppv04a-vessel-slp.dto';
import { UpdatePpv04aVesselSlpDto } from './dto/update-ppv04a-vessel-slp.dto';

@Injectable()
export class Ppv04aVesselSlpService {
  constructor(
    @InjectRepository(Ppv04aVesselSlpEntity)
    private ppv04aVesselSlpRepository: Repository<Ppv04aVesselSlpEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselSlpEntity[]> {
    return this.ppv04aVesselSlpRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselSlpEntity> {
    const entity = await this.ppv04aVesselSlpRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselSlpEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselSlpDto: CreatePpv04aVesselSlpDto): Promise<Ppv04aVesselSlpEntity> {
    const entity = this.ppv04aVesselSlpRepository.create(createPpv04aVesselSlpDto);
    return this.ppv04aVesselSlpRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselSlpDto: UpdatePpv04aVesselSlpDto): Promise<Ppv04aVesselSlpEntity> {
    await this.ppv04aVesselSlpRepository.update(id, updatePpv04aVesselSlpDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselSlpRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselSlpEntity[]> {
    return this.ppv04aVesselSlpRepository.find({
      where: { application_id: applicationId }
    });
  }
}