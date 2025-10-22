import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string): Promise<SubsistenceAuditLogStatuEntity> {
    const entity = await this.subsistenceAuditLogStatusRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`SubsistenceAuditLogStatuEntity with id ${id} not found`);
    }
    return entity;
  }
}
