import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratVesselEntity } from './darat-vessels.entity';

@Injectable()
export class DaratVesselService {
  constructor(
    @InjectRepository(DaratVesselEntity)
    private daratVesselsRepository: Repository<DaratVesselEntity>,
  ) {}

  findAll(): Promise<DaratVesselEntity[]> {
    return this.daratVesselsRepository.find();
  }

  async findOne(id: string): Promise<DaratVesselEntity> {
    const entity = await this.daratVesselsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
