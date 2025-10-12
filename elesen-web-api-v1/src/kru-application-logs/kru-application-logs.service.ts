import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<KruApplicationLogEntity> {
    return this.kruApplicationLogsRepository.findOneBy({ id });
  }
}
