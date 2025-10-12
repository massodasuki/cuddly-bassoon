import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FailedJobEntity } from './failed-jobs.entity';

@Injectable()
export class FailedJobService {
  constructor(
    @InjectRepository(FailedJobEntity)
    private failedJobsRepository: Repository<FailedJobEntity>,
  ) {}

  findAll(): Promise<FailedJobEntity[]> {
    return this.failedJobsRepository.find();
  }

  findOne(id: string): Promise<FailedJobEntity> {
    return this.failedJobsRepository.findOneBy({ id });
  }
}
