import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselKickoffEntity } from './ppv04a-vessel-kickoff.entity';
import { CreatePpv04aVesselKickoffDto } from './dto/create-ppv04a-vessel-kickoff.dto';
import { UpdatePpv04aVesselKickoffDto } from './dto/update-ppv04a-vessel-kickoff.dto';

@Injectable()
export class Ppv04aVesselKickoffService {
  constructor(
    @InjectRepository(Ppv04aVesselKickoffEntity)
    private ppv04aVesselKickoffRepository: Repository<Ppv04aVesselKickoffEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselKickoffEntity[]> {
    return this.ppv04aVesselKickoffRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselKickoffEntity> {
    const entity = await this.ppv04aVesselKickoffRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselKickoffEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselKickoffDto: CreatePpv04aVesselKickoffDto): Promise<Ppv04aVesselKickoffEntity> {
    const entity = this.ppv04aVesselKickoffRepository.create(createPpv04aVesselKickoffDto);
    return this.ppv04aVesselKickoffRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselKickoffDto: UpdatePpv04aVesselKickoffDto): Promise<Ppv04aVesselKickoffEntity> {
    await this.ppv04aVesselKickoffRepository.update(id, updatePpv04aVesselKickoffDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselKickoffRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselKickoffEntity[]> {
    return this.ppv04aVesselKickoffRepository.find({
      where: { application_id: applicationId }
    });
  }
}