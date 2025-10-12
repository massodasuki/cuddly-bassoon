import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<ParliamentEntity> {
    return this.parliamentsRepository.findOneBy({ id });
  }
}
