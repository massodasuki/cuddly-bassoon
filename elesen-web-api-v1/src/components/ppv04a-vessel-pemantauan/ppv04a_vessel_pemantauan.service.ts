import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselPemantauanEntity } from './ppv04a_vessel_pemantauan.entity';
import { CreatePpv04aVesselPemantauanDto } from './dto/create-ppv04a_vessel_pemantauan.dto';
import { UpdatePpv04aVesselPemantauanDto } from './dto/update-ppv04a_vessel_pemantauan.dto';

@Injectable()
export class Ppv04aVesselPemantauanService {
  constructor(
    @InjectRepository(Ppv04aVesselPemantauanEntity)
    private ppv04aVesselPemantauanRepository: Repository<Ppv04aVesselPemantauanEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselPemantauanEntity[]> {
    return this.ppv04aVesselPemantauanRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselPemantauanEntity> {
    const entity = await this.ppv04aVesselPemantauanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselPemantauanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselPemantauanDto: CreatePpv04aVesselPemantauanDto): Promise<Ppv04aVesselPemantauanEntity> {
    const entity = this.ppv04aVesselPemantauanRepository.create(createPpv04aVesselPemantauanDto);
    return this.ppv04aVesselPemantauanRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselPemantauanDto: UpdatePpv04aVesselPemantauanDto): Promise<Ppv04aVesselPemantauanEntity> {
    await this.ppv04aVesselPemantauanRepository.update(id, updatePpv04aVesselPemantauanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselPemantauanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselPemantauanEntity[]> {
    return this.ppv04aVesselPemantauanRepository.find({
      where: { application_id: applicationId }
    });
  }
}