import { Module } from '@nestjs/common';
import { MppiVesselApplicationService } from './mppi-vessel-application.service';
import { MppiVesselApplicationController } from './mppi-vessel-application.controller';
import { MppiVesselApplicationEntity } from './mppi-vessel-application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselApplicationEntity])],
  providers: [MppiVesselApplicationService],
  controllers: [MppiVesselApplicationController],
  exports: [MppiVesselApplicationService],
})
export class MppiVesselApplicationModule {}