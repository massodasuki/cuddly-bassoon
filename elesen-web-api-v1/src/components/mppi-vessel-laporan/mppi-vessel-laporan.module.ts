import { Module } from '@nestjs/common';
import { MppiVesselLaporanService } from './mppi-vessel-laporan.service';
import { MppiVesselLaporanController } from './mppi-vessel-laporan.controller';
import { MppiVesselLaporanEntity } from './mppi-vessel-laporan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLaporanEntity])],
  providers: [MppiVesselLaporanService],
  controllers: [MppiVesselLaporanController],
  exports: [MppiVesselLaporanService],
})
export class MppiVesselLaporanModule {}