import { Module } from '@nestjs/common';
import { MppiVesselLpiService } from './mppi_vessel_lpi.service';
import { MppiVesselLpiController } from './mppi_vessel_lpi.controller';
import { MppiVesselLpiEntity } from './mppi_vessel_lpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLpiEntity])],
  providers: [MppiVesselLpiService],
  controllers: [MppiVesselLpiController],
  exports: [MppiVesselLpiService],
})
export class MppiVesselLpiModule {}