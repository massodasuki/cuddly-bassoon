import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<SpecieEntity> {
    return this.speciesRepository.findOneBy({ id });
  }
}
