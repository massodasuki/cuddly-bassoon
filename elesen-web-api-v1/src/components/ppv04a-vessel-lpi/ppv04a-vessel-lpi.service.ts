import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselLpiEntity } from './ppv04a-vessel-lpi.entity';
import { CreatePpv04aVesselLpiDto } from './dto/create-ppv04a-vessel-lpi.dto';
import { UpdatePpv04aVesselLpiDto } from './dto/update-ppv04a-vessel-lpi.dto';

@Injectable()
export class Ppv04aVesselLpiService {
  constructor(
    @InjectRepository(Ppv04aVesselLpiEntity)
    private ppv04aVesselLpiRepository: Repository<Ppv04aVesselLpiEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselLpiEntity[]> {
    return this.ppv04aVesselLpiRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselLpiEntity> {
    const entity = await this.ppv04aVesselLpiRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselLpiEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselLpiDto: CreatePpv04aVesselLpiDto): Promise<Ppv04aVesselLpiEntity> {
    const entity = this.ppv04aVesselLpiRepository.create(createPpv04aVesselLpiDto);
    return this.ppv04aVesselLpiRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselLpiDto: UpdatePpv04aVesselLpiDto): Promise<Ppv04aVesselLpiEntity> {
    await this.ppv04aVesselLpiRepository.update(id, updatePpv04aVesselLpiDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselLpiRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselLpiEntity[]> {
    return this.ppv04aVesselLpiRepository.find({
      where: { application_id: applicationId }
    });
  }
}