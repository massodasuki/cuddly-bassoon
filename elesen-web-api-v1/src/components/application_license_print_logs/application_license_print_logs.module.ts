import { Module } from '@nestjs/common';
import { ApplicationLicensePrintLogsService } from './application_license_print_logs.service';
import { ApplicationLicensePrintLogsController } from './application_license_print_logs.controller';
import { ApplicationLicensePrintLogsEntity } from './application_license_print_logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationLicensePrintLogsEntity])],
  providers: [ApplicationLicensePrintLogsService],
  controllers: [ApplicationLicensePrintLogsController],
  exports: [ApplicationLicensePrintLogsService],
})
export class ApplicationLicensePrintLogsModule {}