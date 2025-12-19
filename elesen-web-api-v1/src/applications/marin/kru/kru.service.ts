import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruEntity } from './kru.entity';

@Injectable()
export class KruEntityervice {
  constructor(
    @InjectRepository(KruEntity)
    private kruRepository: Repository<KruEntity>,
  ) {}

  findAll(): Promise<KruEntity[]> {
    return this.kruRepository.find();
  }

  async findOne(id: string): Promise<KruEntity> {
    const entity = await this.kruRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
