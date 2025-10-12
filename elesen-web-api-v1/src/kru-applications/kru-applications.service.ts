import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationEntity } from './kru-applications.entity';

@Injectable()
export class KruApplicationService {
  constructor(
    @InjectRepository(KruApplicationEntity)
    private kruApplicationsRepository: Repository<KruApplicationEntity>,
  ) {}

  findAll(): Promise<KruApplicationEntity[]> {
    return this.kruApplicationsRepository.find();
  }

  findOne(id: string): Promise<KruApplicationEntity> {
    return this.kruApplicationsRepository.findOneBy({ id });
  }
}
