import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselExtraFileEntity } from './mppi_vessel_extra_file.entity';
import { CreateMppiVesselExtraFileDto } from './dto/create-mppi_vessel_extra_file.dto';
import { UpdateMppiVesselExtraFileDto } from './dto/update-mppi_vessel_extra_file.dto';

@Injectable()
export class MppiVesselExtraFileService {
  constructor(
    @InjectRepository(MppiVesselExtraFileEntity)
    private mppiVesselExtraFileRepository: Repository<MppiVesselExtraFileEntity>,
  ) {}

  findAll(): Promise<MppiVesselExtraFileEntity[]> {
    return this.mppiVesselExtraFileRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselExtraFileEntity> {
    const entity = await this.mppiVesselExtraFileRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselExtraFileEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselExtraFileDto: CreateMppiVesselExtraFileDto): Promise<MppiVesselExtraFileEntity> {
    const entity = this.mppiVesselExtraFileRepository.create(createMppiVesselExtraFileDto);
    return this.mppiVesselExtraFileRepository.save(entity);
  }

  async update(id: string, updateMppiVesselExtraFileDto: UpdateMppiVesselExtraFileDto): Promise<MppiVesselExtraFileEntity> {
    await this.mppiVesselExtraFileRepository.update(id, updateMppiVesselExtraFileDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselExtraFileRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselExtraFileEntity[]> {
    return this.mppiVesselExtraFileRepository.find({
      where: { application_id: applicationId }
    });
  }
}