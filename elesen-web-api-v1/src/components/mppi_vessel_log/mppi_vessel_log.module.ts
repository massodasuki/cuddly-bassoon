import { Module } from '@nestjs/common';
import { MppiVesselLogService } from './mppi_vessel_log.service';
import { MppiVesselLogController } from './mppi_vessel_log.controller';
import { MppiVesselLogEntity } from './mppi_vessel_log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLogEntity])],
  providers: [MppiVesselLogService],
  controllers: [MppiVesselLogController],
  exports: [MppiVesselLogService],
})
export class MppiVesselLogModule {}