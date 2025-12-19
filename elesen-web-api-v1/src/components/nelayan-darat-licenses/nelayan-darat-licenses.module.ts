import { Module } from '@nestjs/common';
import { NelayanDaratLicensesService } from './nelayan-darat-licenses.service';
import { NelayanDaratLicensesController } from './nelayan-darat-licenses.controller';
import { NelayanDaratLicensesEntity } from './nelayan-darat-licenses.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NelayanDaratLicensesEntity])],
  providers: [NelayanDaratLicensesService],
  controllers: [NelayanDaratLicensesController],
  exports: [NelayanDaratLicensesService],
})
export class NelayanDaratLicensesModule {}