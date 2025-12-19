import { Module } from '@nestjs/common';
import { TzLicensePrintLogsService } from './tz-license-print-logs.service';
import { TzLicensePrintLogsController } from './tz-license-print-logs.controller';
import { TzLicensePrintLogsEntity } from './tz-license-print-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzLicensePrintLogsEntity])],
  providers: [TzLicensePrintLogsService],
  controllers: [TzLicensePrintLogsController],
  exports: [TzLicensePrintLogsService],
})
export class TzLicensePrintLogsModule {}