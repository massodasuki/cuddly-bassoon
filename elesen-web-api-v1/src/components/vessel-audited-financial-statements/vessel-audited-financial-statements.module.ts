import { Module } from '@nestjs/common';
import { VesselAuditedFinancialStatementsService } from './vessel-audited-financial-statements.service';
import { VesselAuditedFinancialStatementsController } from './vessel-audited-financial-statements.controller';
import { VesselAuditedFinancialStatementsEntity } from './vessel-audited-financial-statements.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselAuditedFinancialStatementsEntity])],
  providers: [VesselAuditedFinancialStatementsService],
  controllers: [VesselAuditedFinancialStatementsController],
  exports: [VesselAuditedFinancialStatementsService],
})
export class VesselAuditedFinancialStatementsModule {}