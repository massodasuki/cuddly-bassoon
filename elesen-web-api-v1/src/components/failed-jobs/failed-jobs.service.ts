import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<FailedJobEntity> {
    const entity = await this.failedJobsRepository.findOneBy({ id: parseInt(id) });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

