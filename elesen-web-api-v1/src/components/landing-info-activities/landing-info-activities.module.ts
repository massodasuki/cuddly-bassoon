import { Module } from '@nestjs/common';
import { LandingInfoActivitieService } from './landing-info-activities.service';
import { LandingInfoActivitieEntityController } from './landing-info-activities.controller';
import { LandingInfoActivitieEntity } from './landing-info-activities.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingInfoActivitieEntity])],
  providers: [LandingInfoActivitieService],
  controllers: [LandingInfoActivitieEntityController],
  exports: [LandingInfoActivitieService],
})
export class LandingInfoActivitieModule {}

