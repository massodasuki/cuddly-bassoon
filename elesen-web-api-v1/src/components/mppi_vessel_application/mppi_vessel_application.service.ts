import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselApplicationEntity } from './mppi_vessel_application.entity';
import { CreateMppiVesselApplicationDto } from './dto/create-mppi_vessel_application.dto';
import { UpdateMppiVesselApplicationDto } from './dto/update-mppi_vessel_application.dto';

@Injectable()
export class MppiVesselApplicationService {
  constructor(
    @InjectRepository(MppiVesselApplicationEntity)
    private mppiVesselApplicationRepository: Repository<MppiVesselApplicationEntity>,
  ) {}

  findAll(): Promise<MppiVesselApplicationEntity[]> {
    return this.mppiVesselApplicationRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselApplicationEntity> {
    const entity = await this.mppiVesselApplicationRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselApplicationEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselApplicationDto: CreateMppiVesselApplicationDto): Promise<MppiVesselApplicationEntity> {
    const entity = this.mppiVesselApplicationRepository.create(createMppiVesselApplicationDto);
    return this.mppiVesselApplicationRepository.save(entity);
  }

  async update(id: string, updateMppiVesselApplicationDto: UpdateMppiVesselApplicationDto): Promise<MppiVesselApplicationEntity> {
    await this.mppiVesselApplicationRepository.update(id, updateMppiVesselApplicationDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselApplicationRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselApplicationEntity[]> {
    return this.mppiVesselApplicationRepository.find({
      where: { application_id: applicationId }
    });
  }
}