import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationEntity } from './darat-applications.entity';

@Injectable()
export class DaratApplicationService {
  constructor(
    @InjectRepository(DaratApplicationEntity)
    private daratApplicationsRepository: Repository<DaratApplicationEntity>,
  ) {}

  findAll(): Promise<DaratApplicationEntity[]> {
    return this.daratApplicationsRepository.find();
  }

  findOne(id: string): Promise<DaratApplicationEntity> {
    return this.daratApplicationsRepository.findOneBy({ id });
  }
}
