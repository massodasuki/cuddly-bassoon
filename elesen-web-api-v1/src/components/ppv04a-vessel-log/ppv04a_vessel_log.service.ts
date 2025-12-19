import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselLogEntity } from './ppv04a_vessel_log.entity';
import { CreatePpv04aVesselLogDto } from './dto/create-ppv04a_vessel_log.dto';
import { UpdatePpv04aVesselLogDto } from './dto/update-ppv04a_vessel_log.dto';

@Injectable()
export class Ppv04aVesselLogService {
  constructor(
    @InjectRepository(Ppv04aVesselLogEntity)
    private ppv04aVesselLogRepository: Repository<Ppv04aVesselLogEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselLogEntity[]> {
    return this.ppv04aVesselLogRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselLogEntity> {
    const entity = await this.ppv04aVesselLogRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselLogEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselLogDto: CreatePpv04aVesselLogDto): Promise<Ppv04aVesselLogEntity> {
    const entity = this.ppv04aVesselLogRepository.create(createPpv04aVesselLogDto);
    return this.ppv04aVesselLogRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselLogDto: UpdatePpv04aVesselLogDto): Promise<Ppv04aVesselLogEntity> {
    await this.ppv04aVesselLogRepository.update(id, updatePpv04aVesselLogDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselLogRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselLogEntity[]> {
    return this.ppv04aVesselLogRepository.find({
      where: { application_id: applicationId }
    });
  }
}