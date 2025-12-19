import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ppv04bNoPinEntity } from './ppv04b-no-pin.entity';
import { CreatePpv04bNoPinDto } from './dto/create-ppv04b-no-pin.dto';
import { UpdatePpv04bNoPinDto } from './dto/update-ppv04b-no-pin.dto';

@Injectable()
export class Ppv04bNoPinService {
  constructor(
    @InjectRepository(Ppv04bNoPinEntity)
    private ppv04bNoPinRepository: Repository<Ppv04bNoPinEntity>,
  ) {}

  findAll(): Promise<Ppv04bNoPinEntity[]> {
    return this.ppv04bNoPinRepository.find();
  }

  async findOne(id: string): Promise<Ppv04bNoPinEntity> {
    const entity = await this.ppv04bNoPinRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Ppv04bNoPinEntity with id ${id} not found`);
    }
    return entity;
  }

  async create(createPpv04bNoPinDto: CreatePpv04bNoPinDto): Promise<Ppv04bNoPinEntity> {
    const entity = this.ppv04bNoPinRepository.create(createPpv04bNoPinDto);
    return this.ppv04bNoPinRepository.save(entity);
  }

  async update(id: string, updatePpv04bNoPinDto: UpdatePpv04bNoPinDto): Promise<Ppv04bNoPinEntity> {
    await this.ppv04bNoPinRepository.update(id, updatePpv04bNoPinDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ppv04bNoPinRepository.delete(id);
  }

  async findByApplicationId(applicationId: string): Promise<Ppv04bNoPinEntity[]> {
    return this.ppv04bNoPinRepository.find({
      where: { application_id: applicationId }
    });
  }
}