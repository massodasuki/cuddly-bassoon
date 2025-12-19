import { Module } from '@nestjs/common';
import { Ppv04bPrintLicenseGrantService } from './ppv04b-print-license-grant.service';
import { Ppv04bPrintLicenseGrantController } from './ppv04b-print-license-grant.controller';
import { Ppv04bPrintLicenseGrantEntity } from './ppv04b-print-license-grant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04bPrintLicenseGrantEntity])],
  providers: [Ppv04bPrintLicenseGrantService],
  controllers: [Ppv04bPrintLicenseGrantController],
  exports: [Ppv04bPrintLicenseGrantService],
})
export class Ppv04bPrintLicenseGrantModule {}