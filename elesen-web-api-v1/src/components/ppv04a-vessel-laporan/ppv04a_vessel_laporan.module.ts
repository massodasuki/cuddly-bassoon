import { Module } from '@nestjs/common';
import { Ppv04aVesselLaporanService } from './ppv04a_vessel_laporan.service';
import { Ppv04aVesselLaporanController } from './ppv04a_vessel_laporan.controller';
import { Ppv04aVesselLaporanEntity } from './ppv04a_vessel_laporan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselLaporanEntity])],
  providers: [Ppv04aVesselLaporanService],
  controllers: [Ppv04aVesselLaporanController],
  exports: [Ppv04aVesselLaporanService],
})
export class Ppv04aVesselLaporanModule {}