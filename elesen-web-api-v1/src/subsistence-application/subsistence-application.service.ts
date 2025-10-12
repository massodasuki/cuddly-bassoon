import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceApplicationEntity } from './subsistence-application.entity';

@Injectable()
export class SubsistenceApplicationEntityervice {
  constructor(
    @InjectRepository(SubsistenceApplicationEntity)
    private subsistenceApplicationRepository: Repository<SubsistenceApplicationEntity>,
  ) {}

  findAll(): Promise<SubsistenceApplicationEntity[]> {
    return this.subsistenceApplicationRepository.find();
  }

  findOne(id: string): Promise<SubsistenceApplicationEntity> {
    return this.subsistenceApplicationRepository.findOneBy({ id });
  }
}
