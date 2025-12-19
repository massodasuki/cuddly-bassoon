import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselLpiPeralatanEntity } from './mppi-vessel-lpi-peralatan.entity';
import { CreateMppiVesselLpiPeralatanDto } from './dto/create-mppi-vessel-lpi-peralatan.dto';
import { UpdateMppiVesselLpiPeralatanDto } from './dto/update-mppi-vessel-lpi-peralatan.dto';

@Injectable()
export class MppiVesselLpiPeralatanService {
  constructor(
    @InjectRepository(MppiVesselLpiPeralatanEntity)
    private mppiVesselLpiPeralatanRepository: Repository<MppiVesselLpiPeralatanEntity>,
  ) {}

  findAll(): Promise<MppiVesselLpiPeralatanEntity[]> {
    return this.mppiVesselLpiPeralatanRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselLpiPeralatanEntity> {
    const entity = await this.mppiVesselLpiPeralatanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselLpiPeralatanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselLpiPeralatanDto: CreateMppiVesselLpiPeralatanDto): Promise<MppiVesselLpiPeralatanEntity> {
    const entity = this.mppiVesselLpiPeralatanRepository.create(createMppiVesselLpiPeralatanDto);
    return this.mppiVesselLpiPeralatanRepository.save(entity);
  }

  async update(id: string, updateMppiVesselLpiPeralatanDto: UpdateMppiVesselLpiPeralatanDto): Promise<MppiVesselLpiPeralatanEntity> {
    await this.mppiVesselLpiPeralatanRepository.update(id, updateMppiVesselLpiPeralatanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselLpiPeralatanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselLpiPeralatanEntity[]> {
    return this.mppiVesselLpiPeralatanRepository.find({
      where: { application_id: applicationId }
    });
  }
}