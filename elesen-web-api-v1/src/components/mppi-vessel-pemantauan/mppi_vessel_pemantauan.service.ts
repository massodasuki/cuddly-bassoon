import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselPemantauanEntity } from './mppi_vessel_pemantauan.entity';
import { CreateMppiVesselPemantauanDto } from './dto/create-mppi_vessel_pemantauan.dto';
import { UpdateMppiVesselPemantauanDto } from './dto/update-mppi_vessel_pemantauan.dto';

@Injectable()
export class MppiVesselPemantauanService {
  constructor(
    @InjectRepository(MppiVesselPemantauanEntity)
    private mppiVesselPemantauanRepository: Repository<MppiVesselPemantauanEntity>,
  ) {}

  findAll(): Promise<MppiVesselPemantauanEntity[]> {
    return this.mppiVesselPemantauanRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselPemantauanEntity> {
    const entity = await this.mppiVesselPemantauanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselPemantauanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselPemantauanDto: CreateMppiVesselPemantauanDto): Promise<MppiVesselPemantauanEntity> {
    const entity = this.mppiVesselPemantauanRepository.create(createMppiVesselPemantauanDto);
    return this.mppiVesselPemantauanRepository.save(entity);
  }

  async update(id: string, updateMppiVesselPemantauanDto: UpdateMppiVesselPemantauanDto): Promise<MppiVesselPemantauanEntity> {
    await this.mppiVesselPemantauanRepository.update(id, updateMppiVesselPemantauanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselPemantauanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselPemantauanEntity[]> {
    return this.mppiVesselPemantauanRepository.find({
      where: { application_id: applicationId }
    });
  }
}