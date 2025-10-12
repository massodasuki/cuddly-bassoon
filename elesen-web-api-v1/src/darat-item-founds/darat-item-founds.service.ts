import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<DaratItemFoundEntity> {
    return this.daratItemFoundsRepository.findOneBy({ id });
  }
}
