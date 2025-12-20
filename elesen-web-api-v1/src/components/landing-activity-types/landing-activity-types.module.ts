import { Module } from '@nestjs/common';
import { LandingActivityTypeService } from './landing-activity-types.service';
import { LandingActivityTypeEntityController } from './landing-activity-types.controller';
import { LandingActivityTypeEntity } from './landing-activity-types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingActivityTypeEntity])],
  providers: [LandingActivityTypeService],
  controllers: [LandingActivityTypeEntityController],
  exports: [LandingActivityTypeService],
})
export class LandingActivityTypeModule {}

