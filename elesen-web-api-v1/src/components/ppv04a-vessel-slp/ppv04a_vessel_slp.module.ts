import { Module } from '@nestjs/common';
import { Ppv04aVesselSlpService } from './ppv04a_vessel_slp.service';
import { Ppv04aVesselSlpController } from './ppv04a_vessel_slp.controller';
import { Ppv04aVesselSlpEntity } from './ppv04a_vessel_slp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselSlpEntity])],
  providers: [Ppv04aVesselSlpService],
  controllers: [Ppv04aVesselSlpController],
  exports: [Ppv04aVesselSlpService],
})
export class Ppv04aVesselSlpModule {}