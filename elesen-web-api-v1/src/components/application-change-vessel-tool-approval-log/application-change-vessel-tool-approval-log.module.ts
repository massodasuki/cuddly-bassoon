import { Module } from '@nestjs/common';
import { ApplicationChangeVesselToolApprovalLogService } from './application-change-vessel-tool-approval-log.service';
import { ApplicationChangeVesselToolApprovalLogController } from './application-change-vessel-tool-approval-log.controller';
import { ApplicationChangeVesselToolApprovalLogEntity } from './application-change-vessel-tool-approval-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationChangeVesselToolApprovalLogEntity])],
  providers: [ApplicationChangeVesselToolApprovalLogService],
  controllers: [ApplicationChangeVesselToolApprovalLogController],
  exports: [ApplicationChangeVesselToolApprovalLogService],
})
export class ApplicationChangeVesselToolApprovalLogModule {}