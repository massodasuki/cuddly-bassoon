import { Module } from '@nestjs/common';
import { ApplicationChangeVesselToolApprovalLogService } from './application_change_vessel_tool_approval_log.service';
import { ApplicationChangeVesselToolApprovalLogController } from './application_change_vessel_tool_approval_log.controller';
import { ApplicationChangeVesselToolApprovalLogEntity } from './application_change_vessel_tool_approval_log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationChangeVesselToolApprovalLogEntity])],
  providers: [ApplicationChangeVesselToolApprovalLogService],
  controllers: [ApplicationChangeVesselToolApprovalLogController],
  exports: [ApplicationChangeVesselToolApprovalLogService],
})
export class ApplicationChangeVesselToolApprovalLogModule {}