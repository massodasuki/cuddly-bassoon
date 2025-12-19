import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselMinutePostponementEntity } from './ppv04a-vessel-minute-postponement.entity';
import { CreatePpv04aVesselMinutePostponementDto } from './dto/create-ppv04a-vessel-minute-postponement.dto';
import { UpdatePpv04aVesselMinutePostponementDto } from './dto/update-ppv04a-vessel-minute-postponement.dto';

@Injectable()
export class Ppv04aVesselMinutePostponementService {
  constructor(
    @InjectRepository(Ppv04aVesselMinutePostponementEntity)
    private ppv04aVesselMinutePostponementRepository: Repository<Ppv04aVesselMinutePostponementEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselMinutePostponementEntity[]> {
    return this.ppv04aVesselMinutePostponementRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselMinutePostponementEntity> {
    const entity = await this.ppv04aVesselMinutePostponementRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselMinutePostponementEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselMinutePostponementDto: CreatePpv04aVesselMinutePostponementDto): Promise<Ppv04aVesselMinutePostponementEntity> {
    const entity = this.ppv04aVesselMinutePostponementRepository.create(createPpv04aVesselMinutePostponementDto);
    return this.ppv04aVesselMinutePostponementRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselMinutePostponementDto: UpdatePpv04aVesselMinutePostponementDto): Promise<Ppv04aVesselMinutePostponementEntity> {
    await this.ppv04aVesselMinutePostponementRepository.update(id, updatePpv04aVesselMinutePostponementDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselMinutePostponementRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselMinutePostponementEntity[]> {
    return this.ppv04aVesselMinutePostponementRepository.find({
      where: { application_id: applicationId }
    });
  }
}