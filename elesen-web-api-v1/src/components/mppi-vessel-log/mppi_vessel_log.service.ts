import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselLogEntity } from './mppi_vessel_log.entity';
import { CreateMppiVesselLogDto } from './dto/create-mppi_vessel_log.dto';
import { UpdateMppiVesselLogDto } from './dto/update-mppi_vessel_log.dto';

@Injectable()
export class MppiVesselLogService {
  constructor(
    @InjectRepository(MppiVesselLogEntity)
    private mppiVesselLogRepository: Repository<MppiVesselLogEntity>,
  ) {}

  findAll(): Promise<MppiVesselLogEntity[]> {
    return this.mppiVesselLogRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselLogEntity> {
    const entity = await this.mppiVesselLogRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselLogEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselLogDto: CreateMppiVesselLogDto): Promise<MppiVesselLogEntity> {
    const entity = this.mppiVesselLogRepository.create(createMppiVesselLogDto);
    return this.mppiVesselLogRepository.save(entity);
  }

  async update(id: string, updateMppiVesselLogDto: UpdateMppiVesselLogDto): Promise<MppiVesselLogEntity> {
    await this.mppiVesselLogRepository.update(id, updateMppiVesselLogDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselLogRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselLogEntity[]> {
    return this.mppiVesselLogRepository.find({
      where: { application_id: applicationId }
    });
  }
}