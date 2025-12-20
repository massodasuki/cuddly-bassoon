import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KruApplicationLogEntity } from './kru-application-logs.entity';

@Injectable()
export class KruApplicationLogService {
  constructor(
    @InjectRepository(KruApplicationLogEntity)
    private kruApplicationLogsRepository: Repository<KruApplicationLogEntity>,
  ) {}

  findAll(): Promise<KruApplicationLogEntity[]> {
    return this.kruApplicationLogsRepository.find();
  }

  async findOne(id: string): Promise<KruApplicationLogEntity> {
    const entity = await this.kruApplicationLogsRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
}

