import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselSlpEntity } from './mppi-vessel-slp.entity';
import { CreateMppiVesselSlpDto } from './dto/create-mppi-vessel-slp.dto';
import { UpdateMppiVesselSlpDto } from './dto/update-mppi-vessel-slp.dto';

@Injectable()
export class MppiVesselSlpService {
  constructor(
    @InjectRepository(MppiVesselSlpEntity)
    private mppiVesselSlpRepository: Repository<MppiVesselSlpEntity>,
  ) {}

  findAll(): Promise<MppiVesselSlpEntity[]> {
    return this.mppiVesselSlpRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselSlpEntity> {
    const entity = await this.mppiVesselSlpRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselSlpEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselSlpDto: CreateMppiVesselSlpDto): Promise<MppiVesselSlpEntity> {
    const entity = this.mppiVesselSlpRepository.create(createMppiVesselSlpDto);
    return this.mppiVesselSlpRepository.save(entity);
  }

  async update(id: string, updateMppiVesselSlpDto: UpdateMppiVesselSlpDto): Promise<MppiVesselSlpEntity> {
    await this.mppiVesselSlpRepository.update(id, updateMppiVesselSlpDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselSlpRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselSlpEntity[]> {
    return this.mppiVesselSlpRepository.find({
      where: { application_id: applicationId }
    });
  }
}