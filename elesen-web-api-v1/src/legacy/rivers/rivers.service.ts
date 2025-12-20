import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RiverEntity } from './rivers.entity';

@Injectable()
export class RiverService {
  constructor(
    @InjectRepository(RiverEntity)
    private riversRepository: Repository<RiverEntity>,
  ) {}

  findAll(): Promise<RiverEntity[]> {
    return this.riversRepository.find();
  }

  async findOne(id: string): Promise<RiverEntity> {
    const entity = await this.riversRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`RiverEntity with id ${id} not found`);
    }
    return entity;
  }
}

