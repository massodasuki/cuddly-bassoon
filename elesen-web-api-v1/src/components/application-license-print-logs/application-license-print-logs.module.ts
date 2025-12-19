import { Module } from '@nestjs/common';
import { ApplicationLicensePrintLogsService } from './application-license-print-logs.service';
import { ApplicationLicensePrintLogsController } from './application-license-print-logs.controller';
import { ApplicationLicensePrintLogsEntity } from './application-license-print-logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationLicensePrintLogsEntity])],
  providers: [ApplicationLicensePrintLogsService],
  controllers: [ApplicationLicensePrintLogsController],
  exports: [ApplicationLicensePrintLogsService],
})
export class ApplicationLicensePrintLogsModule {}