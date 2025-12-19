import { Module } from '@nestjs/common';
import { VesselBankStatementsService } from './vessel-bank-statements.service';
import { VesselBankStatementsController } from './vessel-bank-statements.controller';
import { VesselBankStatementsEntity } from './vessel-bank-statements.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselBankStatementsEntity])],
  providers: [VesselBankStatementsService],
  controllers: [VesselBankStatementsController],
  exports: [VesselBankStatementsService],
})
export class VesselBankStatementsModule {}