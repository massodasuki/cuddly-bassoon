import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04aVesselMinuteOtherMattersEntity } from './ppv04a-vessel-minute-other-matters.entity';
import { CreatePpv04aVesselMinuteOtherMattersDto } from './dto/create-ppv04a-vessel-minute-other-matters.dto';
import { UpdatePpv04aVesselMinuteOtherMattersDto } from './dto/update-ppv04a-vessel-minute-other-matters.dto';

@Injectable()
export class Ppv04aVesselMinuteOtherMattersService {
  constructor(
    @InjectRepository(Ppv04aVesselMinuteOtherMattersEntity)
    private ppv04aVesselMinuteOtherMattersRepository: Repository<Ppv04aVesselMinuteOtherMattersEntity>,
  ) {}

  findAll(): Promise<Ppv04aVesselMinuteOtherMattersEntity[]> {
    return this.ppv04aVesselMinuteOtherMattersRepository.find();
  }

  async findOne(id: string): Promise<Ppv04aVesselMinuteOtherMattersEntity> {
    const entity = await this.ppv04aVesselMinuteOtherMattersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04aVesselMinuteOtherMattersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04aVesselMinuteOtherMattersDto: CreatePpv04aVesselMinuteOtherMattersDto): Promise<Ppv04aVesselMinuteOtherMattersEntity> {
    const entity = this.ppv04aVesselMinuteOtherMattersRepository.create(createPpv04aVesselMinuteOtherMattersDto);
    return this.ppv04aVesselMinuteOtherMattersRepository.save(entity);
  }

  async update(id: string, updatePpv04aVesselMinuteOtherMattersDto: UpdatePpv04aVesselMinuteOtherMattersDto): Promise<Ppv04aVesselMinuteOtherMattersEntity> {
    await this.ppv04aVesselMinuteOtherMattersRepository.update(id, updatePpv04aVesselMinuteOtherMattersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04aVesselMinuteOtherMattersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04aVesselMinuteOtherMattersEntity[]> {
    return this.ppv04aVesselMinuteOtherMattersRepository.find({
      where: { application_id: applicationId }
    });
  }
}