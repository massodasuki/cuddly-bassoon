import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselExtraFileEntity } from './ppv04a-vessel-extra-file.entity';
import { CreatePpv04aVesselExtraFileDto } from './dto/create-ppv04a-vessel-extra-file.dto';
import { UpdatePpv04aVesselExtraFileDto } from './dto/update-ppv04a-vessel-extra-file.dto';

@Injectable()
export class Ppv04aVesselExtraFileService {
  constructor(
    @InjectRepository(Ppv04aVesselExtraFileEntity)
    private ppv04aVesselExtraFileRepository: Repository<Ppv04aVesselExtraFileEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselExtraFileEntity[]> {
    return this.ppv04aVesselExtraFileRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselExtraFileEntity> {
    const entity = await this.ppv04aVesselExtraFileRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselExtraFileEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselExtraFileDto: CreatePpv04aVesselExtraFileDto): Promise<Ppv04aVesselExtraFileEntity> {
    const entity = this.ppv04aVesselExtraFileRepository.create(createPpv04aVesselExtraFileDto);
    return this.ppv04aVesselExtraFileRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselExtraFileDto: UpdatePpv04aVesselExtraFileDto): Promise<Ppv04aVesselExtraFileEntity> {
    await this.ppv04aVesselExtraFileRepository.update(id, updatePpv04aVesselExtraFileDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselExtraFileRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselExtraFileEntity[]> {
    return this.ppv04aVesselExtraFileRepository.find({
      where: { application_id: applicationId }
    });
  }
}