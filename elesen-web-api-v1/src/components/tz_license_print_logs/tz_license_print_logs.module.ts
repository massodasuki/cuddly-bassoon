import { Module } from '@nestjs/common';
import { TzLicensePrintLogsService } from './tz_license_print_logs.service';
import { TzLicensePrintLogsController } from './tz_license_print_logs.controller';
import { TzLicensePrintLogsEntity } from './tz_license_print_logs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TzLicensePrintLogsEntity])],
  providers: [TzLicensePrintLogsService],
  controllers: [TzLicensePrintLogsController],
  exports: [TzLicensePrintLogsService],
})
export class TzLicensePrintLogsModule {}