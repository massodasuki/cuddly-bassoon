import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratItemFoundEntity } from './darat-item-founds.entity';

@Injectable()
export class DaratItemFoundService {
  constructor(
    @InjectRepository(DaratItemFoundEntity)
    private daratItemFoundsRepository: Repository<DaratItemFoundEntity>,
  ) {}

  findAll(): Promise<DaratItemFoundEntity[]> {
    return this.daratItemFoundsRepository.find();
  }

  async findOne(id: string): Promise<DaratItemFoundEntity> {
    const entity = await this.daratItemFoundsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}
