import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpecieEntity } from './species.entity';

@Injectable()
export class SpecieService {
  constructor(
    @InjectRepository(SpecieEntity)
    private speciesRepository: Repository<SpecieEntity>,
  ) {}

  findAll(): Promise<SpecieEntity[]> {
    return this.speciesRepository.find();
  }

  async findOne(id: string): Promise<SpecieEntity> {
    const entity = await this.speciesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SpecieEntity with id ${id} not found`);
    }
    return entity;
  }
}

