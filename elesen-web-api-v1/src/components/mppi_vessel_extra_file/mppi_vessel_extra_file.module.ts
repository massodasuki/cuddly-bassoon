import { Module } from '@nestjs/common';
import { MppiVesselExtraFileService } from './mppi_vessel_extra_file.service';
import { MppiVesselExtraFileController } from './mppi_vessel_extra_file.controller';
import { MppiVesselExtraFileEntity } from './mppi_vessel_extra_file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselExtraFileEntity])],
  providers: [MppiVesselExtraFileService],
  controllers: [MppiVesselExtraFileController],
  exports: [MppiVesselExtraFileService],
})
export class MppiVesselExtraFileModule {}