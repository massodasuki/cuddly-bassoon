import { Module } from '@nestjs/common';
import { MppiVesselApplicationService } from './mppi_vessel_application.service';
import { MppiVesselApplicationController } from './mppi_vessel_application.controller';
import { MppiVesselApplicationEntity } from './mppi_vessel_application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselApplicationEntity])],
  providers: [MppiVesselApplicationService],
  controllers: [MppiVesselApplicationController],
  exports: [MppiVesselApplicationService],
})
export class MppiVesselApplicationModule {}