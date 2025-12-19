import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselLpiPeralatanEntity } from './ppv04a_vessel_lpi_peralatan.entity';
import { CreatePpv04aVesselLpiPeralatanDto } from './dto/create-ppv04a_vessel_lpi_peralatan.dto';
import { UpdatePpv04aVesselLpiPeralatanDto } from './dto/update-ppv04a_vessel_lpi_peralatan.dto';

@Injectable()
export class Ppv04aVesselLpiPeralatanService {
  constructor(
    @InjectRepository(Ppv04aVesselLpiPeralatanEntity)
    private ppv04aVesselLpiPeralatanRepository: Repository<Ppv04aVesselLpiPeralatanEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselLpiPeralatanEntity[]> {
    return this.ppv04aVesselLpiPeralatanRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselLpiPeralatanEntity> {
    const entity = await this.ppv04aVesselLpiPeralatanRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselLpiPeralatanEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselLpiPeralatanDto: CreatePpv04aVesselLpiPeralatanDto): Promise<Ppv04aVesselLpiPeralatanEntity> {
    const entity = this.ppv04aVesselLpiPeralatanRepository.create(createPpv04aVesselLpiPeralatanDto);
    return this.ppv04aVesselLpiPeralatanRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselLpiPeralatanDto: UpdatePpv04aVesselLpiPeralatanDto): Promise<Ppv04aVesselLpiPeralatanEntity> {
    await this.ppv04aVesselLpiPeralatanRepository.update(id, updatePpv04aVesselLpiPeralatanDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselLpiPeralatanRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselLpiPeralatanEntity[]> {
    return this.ppv04aVesselLpiPeralatanRepository.find({
      where: { application_id: applicationId }
    });
  }
}