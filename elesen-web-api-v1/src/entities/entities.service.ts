import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<EntitieEntity> {
    return this.entitiesRepository.findOneBy({ id });
  }
}
