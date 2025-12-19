import { Module } from '@nestjs/common';
import { MppiVesselPemantauanService } from './mppi_vessel_pemantauan.service';
import { MppiVesselPemantauanController } from './mppi_vessel_pemantauan.controller';
import { MppiVesselPemantauanEntity } from './mppi_vessel_pemantauan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselPemantauanEntity])],
  providers: [MppiVesselPemantauanService],
  controllers: [MppiVesselPemantauanController],
  exports: [MppiVesselPemantauanService],
})
export class MppiVesselPemantauanModule {}