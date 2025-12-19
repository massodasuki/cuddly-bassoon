import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bAgreeVesselNumbersEntity } from './ppv04b-agree-vessel-numbers.entity';
import { CreatePpv04bAgreeVesselNumbersDto } from './dto/create-ppv04b-agree-vessel-numbers.dto';
import { UpdatePpv04bAgreeVesselNumbersDto } from './dto/update-ppv04b-agree-vessel-numbers.dto';

@Injectable()
export class Ppv04bAgreeVesselNumbersService {
  constructor(
    @InjectRepository(Ppv04bAgreeVesselNumbersEntity)
    private ppv04bAgreeVesselNumbersRepository: Repository<Ppv04bAgreeVesselNumbersEntity>,
  ) {}

  findAll(): Promise<Ppv04bAgreeVesselNumbersEntity[]> {
    return this.ppv04bAgreeVesselNumbersRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bAgreeVesselNumbersEntity> {
    const entity = await this.ppv04bAgreeVesselNumbersRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bAgreeVesselNumbersEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bAgreeVesselNumbersDto: CreatePpv04bAgreeVesselNumbersDto): Promise<Ppv04bAgreeVesselNumbersEntity> {
    const entity = this.ppv04bAgreeVesselNumbersRepository.create(createPpv04bAgreeVesselNumbersDto);
    return this.ppv04bAgreeVesselNumbersRepository.save(entity);
  }

  async update(id: string, updatePpv04bAgreeVesselNumbersDto: UpdatePpv04bAgreeVesselNumbersDto): Promise<Ppv04bAgreeVesselNumbersEntity> {
    await this.ppv04bAgreeVesselNumbersRepository.update(id, updatePpv04bAgreeVesselNumbersDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bAgreeVesselNumbersRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bAgreeVesselNumbersEntity[]> {
    return this.ppv04bAgreeVesselNumbersRepository.find({
      where: { application_id: applicationId }
    });
  }
}