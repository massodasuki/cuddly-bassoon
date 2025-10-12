import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LesenEntity } from './lesen.entity';

@Injectable()
export class LesenEntityervice {
  constructor(
    @InjectRepository(LesenEntity)
    private lesenRepository: Repository<LesenEntity>,
  ) {}

  findAll(): Promise<LesenEntity[]> {
    return this.lesenRepository.find();
  }

  findOne(id: string): Promise<LesenEntity> {
    return this.lesenRepository.findOneBy({ id });
  }
}
