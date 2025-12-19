import { Module } from '@nestjs/common';
import { PpPt01ApprovalsService } from './pp_pt_01_approvals.service';
import { PpPt01ApprovalsController } from './pp_pt_01_approvals.controller';
import { PpPt01ApprovalsEntity } from './pp_pt_01_approvals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01ApprovalsEntity])],
  providers: [PpPt01ApprovalsService],
  controllers: [PpPt01ApprovalsController],
  exports: [PpPt01ApprovalsService],
})
export class PpPt01ApprovalsModule {}