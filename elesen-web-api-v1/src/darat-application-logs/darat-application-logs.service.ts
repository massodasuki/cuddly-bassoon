import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaratApplicationLogEntity } from './darat-application-logs.entity';

@Injectable()
export class DaratApplicationLogService {
  constructor(
    @InjectRepository(DaratApplicationLogEntity)
    private daratApplicationLogsRepository: Repository<DaratApplicationLogEntity>,
  ) {}

  findAll(): Promise<DaratApplicationLogEntity[]> {
    return this.daratApplicationLogsRepository.find();
  }

  findOne(id: string): Promise<DaratApplicationLogEntity> {
    return this.daratApplicationLogsRepository.findOneBy({ id });
  }
}
