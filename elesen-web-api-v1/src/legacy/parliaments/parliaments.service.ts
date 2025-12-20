import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParliamentEntity } from './parliaments.entity';

@Injectable()
export class ParliamentService {
  constructor(
    @InjectRepository(ParliamentEntity)
    private parliamentsRepository: Repository<ParliamentEntity>,
  ) {}

  findAll(): Promise<ParliamentEntity[]> {
    return this.parliamentsRepository.find();
  }

  async findOne(id: string): Promise<ParliamentEntity> {
    const entity = await this.parliamentsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

