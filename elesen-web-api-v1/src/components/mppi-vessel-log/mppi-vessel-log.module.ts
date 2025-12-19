import { Module } from '@nestjs/common';
import { MppiVesselLogService } from './mppi-vessel-log.service';
import { MppiVesselLogController } from './mppi-vessel-log.controller';
import { MppiVesselLogEntity } from './mppi-vessel-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLogEntity])],
  providers: [MppiVesselLogService],
  controllers: [MppiVesselLogController],
  exports: [MppiVesselLogService],
})
export class MppiVesselLogModule {}