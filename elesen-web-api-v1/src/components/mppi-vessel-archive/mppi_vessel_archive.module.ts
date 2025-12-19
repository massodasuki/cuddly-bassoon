import { Module } from '@nestjs/common';
import { MppiVesselArchiveService } from './mppi_vessel_archive.service';
import { MppiVesselArchiveController } from './mppi_vessel_archive.controller';
import { MppiVesselArchiveEntity } from './mppi_vessel_archive.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselArchiveEntity])],
  providers: [MppiVesselArchiveService],
  controllers: [MppiVesselArchiveController],
  exports: [MppiVesselArchiveService],
})
export class MppiVesselArchiveModule {}