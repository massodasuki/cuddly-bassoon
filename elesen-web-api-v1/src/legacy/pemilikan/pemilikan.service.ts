import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PemilikanEntity } from './pemilikan.entity';

@Injectable()
export class PemilikanEntityervice {
  constructor(
    @InjectRepository(PemilikanEntity)
    private pemilikanRepository: Repository<PemilikanEntity>,
  ) {}

  findAll(): Promise<PemilikanEntity[]> {
    return this.pemilikanRepository.find();
  }

  async findOne(id: string): Promise<PemilikanEntity> {
    const entity = await this.pemilikanRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

