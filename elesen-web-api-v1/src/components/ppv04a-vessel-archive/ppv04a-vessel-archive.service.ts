import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselArchiveEntity } from './ppv04a-vessel-archive.entity';
import { CreatePpv04aVesselArchiveDto } from './dto/create-ppv04a-vessel-archive.dto';
import { UpdatePpv04aVesselArchiveDto } from './dto/update-ppv04a-vessel-archive.dto';

@Injectable()
export class Ppv04aVesselArchiveService {
  constructor(
    @InjectRepository(Ppv04aVesselArchiveEntity)
    private ppv04aVesselArchiveRepository: Repository<Ppv04aVesselArchiveEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselArchiveEntity[]> {
    return this.ppv04aVesselArchiveRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselArchiveEntity> {
    const entity = await this.ppv04aVesselArchiveRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselArchiveEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselArchiveDto: CreatePpv04aVesselArchiveDto): Promise<Ppv04aVesselArchiveEntity> {
    const entity = this.ppv04aVesselArchiveRepository.create(createPpv04aVesselArchiveDto);
    return this.ppv04aVesselArchiveRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselArchiveDto: UpdatePpv04aVesselArchiveDto): Promise<Ppv04aVesselArchiveEntity> {
    await this.ppv04aVesselArchiveRepository.update(id, updatePpv04aVesselArchiveDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselArchiveRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselArchiveEntity[]> {
    return this.ppv04aVesselArchiveRepository.find({
      where: { application_id: applicationId }
    });
  }
}