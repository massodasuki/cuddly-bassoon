import { Module } from '@nestjs/common';
import { Ppv04aVesselArchiveService } from './ppv04a_vessel_archive.service';
import { Ppv04aVesselArchiveController } from './ppv04a_vessel_archive.controller';
import { Ppv04aVesselArchiveEntity } from './ppv04a_vessel_archive.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselArchiveEntity])],
  providers: [Ppv04aVesselArchiveService],
  controllers: [Ppv04aVesselArchiveController],
  exports: [Ppv04aVesselArchiveService],
})
export class Ppv04aVesselArchiveModule {}