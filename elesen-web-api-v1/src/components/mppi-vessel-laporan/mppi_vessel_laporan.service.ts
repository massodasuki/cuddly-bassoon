import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselLaporanEntity } from './mppi_vessel_laporan.entity';
import { CreateMppiVesselLaporanDto } from './dto/create-mppi_vessel_laporan.dto';
import { UpdateMppiVesselLaporanDto } from './dto/update-mppi_vessel_laporan.dto';

@Injectable()
export class MppiVesselLaporanService {
  constructor(
    @InjectRepository(MppiVesselLaporanEntity)
    private mppiVesselLaporanRepository: Repository<MppiVesselLaporanEntity>,
  ) {}

  findAll(): Promise<MppiVesselLaporanEntity[]> {
    return this.mppiVesselLaporanRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselLaporanEntity> {
    const entity = await this.mppiVesselLaporanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselLaporanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselLaporanDto: CreateMppiVesselLaporanDto): Promise<MppiVesselLaporanEntity> {
    const entity = this.mppiVesselLaporanRepository.create(createMppiVesselLaporanDto);
    return this.mppiVesselLaporanRepository.save(entity);
  }

  async update(id: string, updateMppiVesselLaporanDto: UpdateMppiVesselLaporanDto): Promise<MppiVesselLaporanEntity> {
    await this.mppiVesselLaporanRepository.update(id, updateMppiVesselLaporanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselLaporanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselLaporanEntity[]> {
    return this.mppiVesselLaporanRepository.find({
      where: { application_id: applicationId }
    });
  }
}