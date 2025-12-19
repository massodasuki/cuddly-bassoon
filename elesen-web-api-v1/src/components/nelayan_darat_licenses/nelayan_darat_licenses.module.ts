import { Module } from '@nestjs/common';
import { NelayanDaratLicensesService } from './nelayan_darat_licenses.service';
import { NelayanDaratLicensesController } from './nelayan_darat_licenses.controller';
import { NelayanDaratLicensesEntity } from './nelayan_darat_licenses.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NelayanDaratLicensesEntity])],
  providers: [NelayanDaratLicensesService],
  controllers: [NelayanDaratLicensesController],
  exports: [NelayanDaratLicensesService],
})
export class NelayanDaratLicensesModule {}