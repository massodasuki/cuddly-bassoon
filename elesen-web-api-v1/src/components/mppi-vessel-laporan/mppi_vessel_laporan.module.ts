import { Module } from '@nestjs/common';
import { MppiVesselLaporanService } from './mppi_vessel_laporan.service';
import { MppiVesselLaporanController } from './mppi_vessel_laporan.controller';
import { MppiVesselLaporanEntity } from './mppi_vessel_laporan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLaporanEntity])],
  providers: [MppiVesselLaporanService],
  controllers: [MppiVesselLaporanController],
  exports: [MppiVesselLaporanService],
})
export class MppiVesselLaporanModule {}