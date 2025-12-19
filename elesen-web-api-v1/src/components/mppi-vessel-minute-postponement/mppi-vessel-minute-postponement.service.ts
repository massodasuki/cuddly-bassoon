import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MppiVesselMinutePostponementEntity } from './mppi-vessel-minute-postponement.entity';
import { CreateMppiVesselMinutePostponementDto } from './dto/create-mppi-vessel-minute-postponement.dto';
import { UpdateMppiVesselMinutePostponementDto } from './dto/update-mppi-vessel-minute-postponement.dto';

@Injectable()
export class MppiVesselMinutePostponementService {
  constructor(
    @InjectRepository(MppiVesselMinutePostponementEntity)
    private mppiVesselMinutePostponementRepository: Repository<MppiVesselMinutePostponementEntity>,
  ) {}

  findAll(): Promise<MppiVesselMinutePostponementEntity[]> {
    return this.mppiVesselMinutePostponementRepository.find();
  }

  async findOne(id: string): Promise<MppiVesselMinutePostponementEntity> {
    const entity = await this.mppiVesselMinutePostponementRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MppiVesselMinutePostponementEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createMppiVesselMinutePostponementDto: CreateMppiVesselMinutePostponementDto): Promise<MppiVesselMinutePostponementEntity> {
    const entity = this.mppiVesselMinutePostponementRepository.create(createMppiVesselMinutePostponementDto);
    return this.mppiVesselMinutePostponementRepository.save(entity);
  }

  async update(id: string, updateMppiVesselMinutePostponementDto: UpdateMppiVesselMinutePostponementDto): Promise<MppiVesselMinutePostponementEntity> {
    await this.mppiVesselMinutePostponementRepository.update(id, updateMppiVesselMinutePostponementDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.mppiVesselMinutePostponementRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<MppiVesselMinutePostponementEntity[]> {
    return this.mppiVesselMinutePostponementRepository.find({
      where: { application_id: applicationId }
    });
  }
}