import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PpPvpApplicationDetailsEntity } from './pp-pvp-application-details.entity';
import { CreatePpPvpApplicationDetailsDto } from './dto/create-pp-pvp-application-details.dto';
import { UpdatePpPvpApplicationDetailsDto } from './dto/update-pp-pvp-application-details.dto';

@Injectable()
export class PpPvpApplicationDetailsService {
  constructor(
    @InjectRepository(PpPvpApplicationDetailsEntity)
    private ppPvpApplicationDetailsRepository: Repository<PpPvpApplicationDetailsEntity>,
  ) {}

  findAll(): Promise<PpPvpApplicationDetailsEntity[]> {
    return this.ppPvpApplicationDetailsRepository.find();
  }

  async findOne(id: string): Promise<PpPvpApplicationDetailsEntity> {
    const entity = await this.ppPvpApplicationDetailsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PpPvpApplicationDetailsEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpPvpApplicationDetailsDto: CreatePpPvpApplicationDetailsDto): Promise<PpPvpApplicationDetailsEntity> {
    const entity = this.ppPvpApplicationDetailsRepository.create(createPpPvpApplicationDetailsDto);
    return this.ppPvpApplicationDetailsRepository.save(entity);
  }

  async update(id: string, updatePpPvpApplicationDetailsDto: UpdatePpPvpApplicationDetailsDto): Promise<PpPvpApplicationDetailsEntity> {
    await this.ppPvpApplicationDetailsRepository.update(id, updatePpPvpApplicationDetailsDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppPvpApplicationDetailsRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<PpPvpApplicationDetailsEntity[]> {
    return this.ppPvpApplicationDetailsRepository.find({
      where: { application_id: applicationId }
    });
  }
}