import { Module } from '@nestjs/common';
import { Ppv04aVesselApplicationService } from './ppv04a_vessel_application.service';
import { Ppv04aVesselApplicationController } from './ppv04a_vessel_application.controller';
import { Ppv04aVesselApplicationEntity } from './ppv04a_vessel_application.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselApplicationEntity])],
  providers: [Ppv04aVesselApplicationService],
  controllers: [Ppv04aVesselApplicationController],
  exports: [Ppv04aVesselApplicationService],
})
export class Ppv04aVesselApplicationModule {}