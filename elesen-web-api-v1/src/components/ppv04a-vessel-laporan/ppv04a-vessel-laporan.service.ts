import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselLaporanEntity } from './ppv04a-vessel-laporan.entity';
import { CreatePpv04aVesselLaporanDto } from './dto/create-ppv04a-vessel-laporan.dto';
import { UpdatePpv04aVesselLaporanDto } from './dto/update-ppv04a-vessel-laporan.dto';

@Injectable()
export class Ppv04aVesselLaporanService {
  constructor(
    @InjectRepository(Ppv04aVesselLaporanEntity)
    private ppv04aVesselLaporanRepository: Repository<Ppv04aVesselLaporanEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselLaporanEntity[]> {
    return this.ppv04aVesselLaporanRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselLaporanEntity> {
    const entity = await this.ppv04aVesselLaporanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselLaporanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselLaporanDto: CreatePpv04aVesselLaporanDto): Promise<Ppv04aVesselLaporanEntity> {
    const entity = this.ppv04aVesselLaporanRepository.create(createPpv04aVesselLaporanDto);
    return this.ppv04aVesselLaporanRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselLaporanDto: UpdatePpv04aVesselLaporanDto): Promise<Ppv04aVesselLaporanEntity> {
    await this.ppv04aVesselLaporanRepository.update(id, updatePpv04aVesselLaporanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselLaporanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselLaporanEntity[]> {
    return this.ppv04aVesselLaporanRepository.find({
      where: { application_id: applicationId }
    });
  }
}