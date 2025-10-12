import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SsdEntity } from './ssds.entity';

@Injectable()
export class SsdService {
  constructor(
    @InjectRepository(SsdEntity)
    private ssdsRepository: Repository<SsdEntity>,
  ) {}

  findAll(): Promise<SsdEntity[]> {
    return this.ssdsRepository.find();
  }

  async findOne(id: string): Promise<SsdEntity> {
    const entity = await this.ssdsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SsdEntity with id ${id} not found`);
    }
    return entity;
  }
}
