import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselKickoffEntity } from './mppi_vessel_kickoff.entity';
import { CreateMppiVesselKickoffDto } from './dto/create-mppi_vessel_kickoff.dto';
import { UpdateMppiVesselKickoffDto } from './dto/update-mppi_vessel_kickoff.dto';

@Injectable()
export class MppiVesselKickoffService {
  constructor(
    @InjectRepository(MppiVesselKickoffEntity)
    private mppiVesselKickoffRepository: Repository<MppiVesselKickoffEntity>,
  ) {}

  findAll(): Promise<MppiVesselKickoffEntity[]> {
    return this.mppiVesselKickoffRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselKickoffEntity> {
    const entity = await this.mppiVesselKickoffRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselKickoffEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselKickoffDto: CreateMppiVesselKickoffDto): Promise<MppiVesselKickoffEntity> {
    const entity = this.mppiVesselKickoffRepository.create(createMppiVesselKickoffDto);
    return this.mppiVesselKickoffRepository.save(entity);
  }

  async update(id: string, updateMppiVesselKickoffDto: UpdateMppiVesselKickoffDto): Promise<MppiVesselKickoffEntity> {
    await this.mppiVesselKickoffRepository.update(id, updateMppiVesselKickoffDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselKickoffRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselKickoffEntity[]> {
    return this.mppiVesselKickoffRepository.find({
      where: { application_id: applicationId }
    });
  }
}