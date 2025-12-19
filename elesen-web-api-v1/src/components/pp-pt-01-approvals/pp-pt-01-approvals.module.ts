import { Module } from '@nestjs/common';
import { PpPt01ApprovalsService } from './pp-pt-01-approvals.service';
import { PpPt01ApprovalsController } from './pp-pt-01-approvals.controller';
import { PpPt01ApprovalsEntity } from './pp-pt-01-approvals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PpPt01ApprovalsEntity])],
  providers: [PpPt01ApprovalsService],
  controllers: [PpPt01ApprovalsController],
  exports: [PpPt01ApprovalsService],
})
export class PpPt01ApprovalsModule {}