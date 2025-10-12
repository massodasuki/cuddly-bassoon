import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceDocEntity } from './subsistence-doc.entity';

@Injectable()
export class SubsistenceDocEntityervice {
  constructor(
    @InjectRepository(SubsistenceDocEntity)
    private subsistenceDocRepository: Repository<SubsistenceDocEntity>,
  ) {}

  findAll(): Promise<SubsistenceDocEntity[]> {
    return this.subsistenceDocRepository.find();
  }

  findOne(id: string): Promise<SubsistenceDocEntity> {
    return this.subsistenceDocRepository.findOneBy({ id });
  }
}
