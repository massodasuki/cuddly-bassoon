import { Module } from '@nestjs/common';
import { MppiVesselLpiPeralatanService } from './mppi-vessel-lpi-peralatan.service';
import { MppiVesselLpiPeralatanController } from './mppi-vessel-lpi-peralatan.controller';
import { MppiVesselLpiPeralatanEntity } from './mppi-vessel-lpi-peralatan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLpiPeralatanEntity])],
  providers: [MppiVesselLpiPeralatanService],
  controllers: [MppiVesselLpiPeralatanController],
  exports: [MppiVesselLpiPeralatanService],
})
export class MppiVesselLpiPeralatanModule {}