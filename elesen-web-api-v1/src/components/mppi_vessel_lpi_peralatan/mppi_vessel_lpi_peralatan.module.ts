import { Module } from '@nestjs/common';
import { MppiVesselLpiPeralatanService } from './mppi_vessel_lpi_peralatan.service';
import { MppiVesselLpiPeralatanController } from './mppi_vessel_lpi_peralatan.controller';
import { MppiVesselLpiPeralatanEntity } from './mppi_vessel_lpi_peralatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLpiPeralatanEntity])],
  providers: [MppiVesselLpiPeralatanService],
  controllers: [MppiVesselLpiPeralatanController],
  exports: [MppiVesselLpiPeralatanService],
})
export class MppiVesselLpiPeralatanModule {}