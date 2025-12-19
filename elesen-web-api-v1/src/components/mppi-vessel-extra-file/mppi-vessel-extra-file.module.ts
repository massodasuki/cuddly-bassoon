import { Module } from '@nestjs/common';
import { MppiVesselExtraFileService } from './mppi-vessel-extra-file.service';
import { MppiVesselExtraFileController } from './mppi-vessel-extra-file.controller';
import { MppiVesselExtraFileEntity } from './mppi-vessel-extra-file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MppiVesselExtraFileEntity])],
  providers: [MppiVesselExtraFileService],
  controllers: [MppiVesselExtraFileController],
  exports: [MppiVesselExtraFileService],
})
export class MppiVesselExtraFileModule {}