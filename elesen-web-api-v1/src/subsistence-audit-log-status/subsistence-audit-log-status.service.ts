import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubsistenceAuditLogStatuEntity } from './subsistence-audit-log-status.entity';

@Injectable()
export class SubsistenceAuditLogStatuService {
  constructor(
    @InjectRepository(SubsistenceAuditLogStatuEntity)
    private subsistenceAuditLogStatusRepository: Repository<SubsistenceAuditLogStatuEntity>,
  ) {}

  findAll(): Promise<SubsistenceAuditLogStatuEntity[]> {
    return this.subsistenceAuditLogStatusRepository.find();
  }

  findOne(id: string): Promise<SubsistenceAuditLogStatuEntity> {
    return this.subsistenceAuditLogStatusRepository.findOneBy({ id });
  }
}
