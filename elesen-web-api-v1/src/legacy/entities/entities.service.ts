import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitieEntity } from './entities.entity';

@Injectable()
export class EntitieService {
  constructor(
    @InjectRepository(EntitieEntity)
    private entitiesRepository: Repository<EntitieEntity>,
  ) {}

  findAll(): Promise<EntitieEntity[]> {
    return this.entitiesRepository.find();
  }

  async findOne(id: string): Promise<EntitieEntity> {
    const entity = await this.entitiesRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

