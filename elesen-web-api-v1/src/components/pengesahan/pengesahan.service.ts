import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PengesahanEntity } from './pengesahan.entity';

@Injectable()
export class PengesahanEntityervice {
  constructor(
    @InjectRepository(PengesahanEntity)
    private pengesahanRepository: Repository<PengesahanEntity>,
  ) {}

  findAll(): Promise<PengesahanEntity[]> {
    return this.pengesahanRepository.find();
  }

  async findOne(id: string): Promise<PengesahanEntity> {
    const entity = await this.pengesahanRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

