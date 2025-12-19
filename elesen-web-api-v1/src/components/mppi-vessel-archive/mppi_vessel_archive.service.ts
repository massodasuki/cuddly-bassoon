import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselArchiveEntity } from './mppi_vessel_archive.entity';
import { CreateMppiVesselArchiveDto } from './dto/create-mppi_vessel_archive.dto';
import { UpdateMppiVesselArchiveDto } from './dto/update-mppi_vessel_archive.dto';

@Injectable()
export class MppiVesselArchiveService {
  constructor(
    @InjectRepository(MppiVesselArchiveEntity)
    private mppiVesselArchiveRepository: Repository<MppiVesselArchiveEntity>,
  ) {}

  findAll(): Promise<MppiVesselArchiveEntity[]> {
    return this.mppiVesselArchiveRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselArchiveEntity> {
    const entity = await this.mppiVesselArchiveRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselArchiveEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselArchiveDto: CreateMppiVesselArchiveDto): Promise<MppiVesselArchiveEntity> {
    const entity = this.mppiVesselArchiveRepository.create(createMppiVesselArchiveDto);
    return this.mppiVesselArchiveRepository.save(entity);
  }

  async update(id: string, updateMppiVesselArchiveDto: UpdateMppiVesselArchiveDto): Promise<MppiVesselArchiveEntity> {
    await this.mppiVesselArchiveRepository.update(id, updateMppiVesselArchiveDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselArchiveRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselArchiveEntity[]> {
    return this.mppiVesselArchiveRepository.find({
      where: { application_id: applicationId }
    });
  }
}