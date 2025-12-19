import { Module } from '@nestjs/common';
import { Ppv04aVesselMinuteOtherMattersService } from './ppv04a_vessel_minute_other_matters.service';
import { Ppv04aVesselMinuteOtherMattersController } from './ppv04a_vessel_minute_other_matters.controller';
import { Ppv04aVesselMinuteOtherMattersEntity } from './ppv04a_vessel_minute_other_matters.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ppv04aVesselMinuteOtherMattersEntity])],
  providers: [Ppv04aVesselMinuteOtherMattersService],
  controllers: [Ppv04aVesselMinuteOtherMattersController],
  exports: [Ppv04aVesselMinuteOtherMattersService],
})
export class Ppv04aVesselMinuteOtherMattersModule {}