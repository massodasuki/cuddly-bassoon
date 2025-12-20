import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from './audit-logs.entity';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';
import { UpdateAuditLogDto } from './dto/update-audit-log.dto';

@Injectable()
export class AuditLogsService {
  constructor(
    @InjectRepository(AuditLog)
    private auditLogsRepository: Repository<AuditLog>,
  ) {}

  findAll(): Promise<AuditLog[]> {
    return this.auditLogsRepository.find();
  }

  async findOne(id: string): Promise<AuditLog> {
    const auditLog = await this.auditLogsRepository.findOneBy({ id });
    if (!auditLog) {
      throw new Error('AuditLog not found');
    }
    return auditLog;
  }

  async create(createAuditLogDto: CreateAuditLogDto): Promise<AuditLog> {
    const auditLog = this.auditLogsRepository.create(createAuditLogDto);
    return this.auditLogsRepository.save(auditLog);
  }

  async update(id: string, updateAuditLogDto: UpdateAuditLogDto): Promise<AuditLog> {
    await this.auditLogsRepository.update(id, updateAuditLogDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.auditLogsRepository.delete(id);
  }
}
