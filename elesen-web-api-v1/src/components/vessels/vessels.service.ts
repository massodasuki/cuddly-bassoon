import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VesselEntity } from './vessels.entity';

@Injectable()
export class VesselService {
  constructor(
    @InjectRepository(VesselEntity)
    private vesselsRepository: Repository<VesselEntity>,
  ) {}

  findAll(): Promise<VesselEntity[]> {
    return this.vesselsRepository.find();
  }

  async findOne(id: string): Promise<VesselEntity> {
    const entity = await this.vesselsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Vessel with id ${id} not found`);
    }
    return entity;
  }
}

