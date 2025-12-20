import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LesenEntity } from './lesen.entity';

@Injectable()
export class LesenEntityervice {
  constructor(
    @InjectRepository(LesenEntity)
    private lesenRepository: Repository<LesenEntity>,
  ) {}

  findAll(): Promise<LesenEntity[]> {
    return this.lesenRepository.find();
  }

  async findOne(id: string): Promise<LesenEntity> {
    const entity = await this.lesenRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

