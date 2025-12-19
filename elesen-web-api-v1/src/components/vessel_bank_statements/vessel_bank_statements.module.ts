import { Module } from '@nestjs/common';
import { VesselBankStatementsService } from './vessel_bank_statements.service';
import { VesselBankStatementsController } from './vessel_bank_statements.controller';
import { VesselBankStatementsEntity } from './vessel_bank_statements.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselBankStatementsEntity])],
  providers: [VesselBankStatementsService],
  controllers: [VesselBankStatementsController],
  exports: [VesselBankStatementsService],
})
export class VesselBankStatementsModule {}