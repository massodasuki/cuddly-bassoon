import { Module } from '@nestjs/common';
import { VesselAuditedFinancialStatementsService } from './vessel_audited_financial_statements.service';
import { VesselAuditedFinancialStatementsController } from './vessel_audited_financial_statements.controller';
import { VesselAuditedFinancialStatementsEntity } from './vessel_audited_financial_statements.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselAuditedFinancialStatementsEntity])],
  providers: [VesselAuditedFinancialStatementsService],
  controllers: [VesselAuditedFinancialStatementsController],
  exports: [VesselAuditedFinancialStatementsService],
})
export class VesselAuditedFinancialStatementsModule {}