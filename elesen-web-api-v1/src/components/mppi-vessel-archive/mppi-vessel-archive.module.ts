import { Module } from '@nestjs/common';
import { MppiVesselArchiveService } from './mppi-vessel-archive.service';
import { MppiVesselArchiveController } from './mppi-vessel-archive.controller';
import { MppiVesselArchiveEntity } from './mppi-vessel-archive.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselArchiveEntity])],
  providers: [MppiVesselArchiveService],
  controllers: [MppiVesselArchiveController],
  exports: [MppiVesselArchiveService],
})
export class MppiVesselArchiveModule {}