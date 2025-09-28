import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialService } from './financial.service';
import { FinancialController } from './financial.controller';
import { Financial } from './entities/financial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Financial])],
  controllers: [FinancialController],
  providers: [FinancialService],
})
export class FinancialModule {}
