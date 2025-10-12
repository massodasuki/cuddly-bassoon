import { Module } from '@nestjs/common';
import { ShellsQuotaHistorieService } from './shells-quota-histories.service';
import { ShellsQuotaHistorieEntityController } from './shells-quota-histories.controller';
import { ShellsQuotaHistorieEntity } from './shells-quota-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ShellsQuotaHistorieEntity])],
  providers: [ShellsQuotaHistorieService],
  controllers: [ShellsQuotaHistorieEntityController],
  exports: [ShellsQuotaHistorieService],
})
export class ShellsQuotaHistorieModule {}
