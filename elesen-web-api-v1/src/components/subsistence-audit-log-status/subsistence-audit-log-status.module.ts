import { Module } from '@nestjs/common';
import { SubsistenceAuditLogStatuService } from './subsistence-audit-log-status.service';
import { SubsistenceAuditLogStatuEntityController } from './subsistence-audit-log-status.controller';
import { SubsistenceAuditLogStatuEntity } from './subsistence-audit-log-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubsistenceAuditLogStatuEntity])],
  providers: [SubsistenceAuditLogStatuService],
  controllers: [SubsistenceAuditLogStatuEntityController],
  exports: [SubsistenceAuditLogStatuService],
})
export class SubsistenceAuditLogStatuModule {}
