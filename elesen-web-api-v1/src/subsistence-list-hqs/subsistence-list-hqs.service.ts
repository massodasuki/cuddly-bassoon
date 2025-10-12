import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceListHqEntity } from './subsistence-list-hqs.entity';

@Injectable()
export class SubsistenceListHqService {
  constructor(
    @InjectRepository(SubsistenceListHqEntity)
    private subsistenceListHqsRepository: Repository<SubsistenceListHqEntity>,
  ) {}

  findAll(): Promise<SubsistenceListHqEntity[]> {
    return this.subsistenceListHqsRepository.find();
  }

  findOne(id: string): Promise<SubsistenceListHqEntity> {
    return this.subsistenceListHqsRepository.findOneBy({ id });
  }
}
