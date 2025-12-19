import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselLpiEntity } from './mppi-vessel-lpi.entity';
import { CreateMppiVesselLpiDto } from './dto/create-mppi-vessel-lpi.dto';
import { UpdateMppiVesselLpiDto } from './dto/update-mppi-vessel-lpi.dto';

@Injectable()
export class MppiVesselLpiService {
  constructor(
    @InjectRepository(MppiVesselLpiEntity)
    private mppiVesselLpiRepository: Repository<MppiVesselLpiEntity>,
  ) {}

  findAll(): Promise<MppiVesselLpiEntity[]> {
    return this.mppiVesselLpiRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselLpiEntity> {
    const entity = await this.mppiVesselLpiRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselLpiEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselLpiDto: CreateMppiVesselLpiDto): Promise<MppiVesselLpiEntity> {
    const entity = this.mppiVesselLpiRepository.create(createMppiVesselLpiDto);
    return this.mppiVesselLpiRepository.save(entity);
  }

  async update(id: string, updateMppiVesselLpiDto: UpdateMppiVesselLpiDto): Promise<MppiVesselLpiEntity> {
    await this.mppiVesselLpiRepository.update(id, updateMppiVesselLpiDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselLpiRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselLpiEntity[]> {
    return this.mppiVesselLpiRepository.find({
      where: { application_id: applicationId }
    });
  }
}