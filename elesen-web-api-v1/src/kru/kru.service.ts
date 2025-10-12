import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KruEntity> {
    return this.kruRepository.findOneBy({ id });
  }
}
