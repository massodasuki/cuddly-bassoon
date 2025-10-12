import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComplaintLogEntity } from './complaint-logs.entity';

@Injectable()
export class ComplaintLogService {
  constructor(
    @InjectRepository(ComplaintLogEntity)
    private complaintLogsRepository: Repository<ComplaintLogEntity>,
  ) {}

  findAll(): Promise<ComplaintLogEntity[]> {
    return this.complaintLogsRepository.find();
  }

  findOne(id: string): Promise<ComplaintLogEntity> {
    return this.complaintLogsRepository.findOneBy({ id });
  }
}
