import { Module } from '@nestjs/common';
import { Ppv04aVesselExtraFileService } from './ppv04a_vessel_extra_file.service';
import { Ppv04aVesselExtraFileController } from './ppv04a_vessel_extra_file.controller';
import { Ppv04aVesselExtraFileEntity } from './ppv04a_vessel_extra_file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselExtraFileEntity])],
  providers: [Ppv04aVesselExtraFileService],
  controllers: [Ppv04aVesselExtraFileController],
  exports: [Ppv04aVesselExtraFileService],
})
export class Ppv04aVesselExtraFileModule {}