import { Module } from '@nestjs/common';
import { MppiVesselLpiService } from './mppi-vessel-lpi.service';
import { MppiVesselLpiController } from './mppi-vessel-lpi.controller';
import { MppiVesselLpiEntity } from './mppi-vessel-lpi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselLpiEntity])],
  providers: [MppiVesselLpiService],
  controllers: [MppiVesselLpiController],
  exports: [MppiVesselLpiService],
})
export class MppiVesselLpiModule {}