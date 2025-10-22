import { Module } from '@nestjs/common';
import { LandingActivitySpecieService } from './landing-activity-species.service';
import { LandingActivitySpecieEntityController } from './landing-activity-species.controller';
import { LandingActivitySpecieEntity } from './landing-activity-species.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingActivitySpecieEntity])],
  providers: [LandingActivitySpecieService],
  controllers: [LandingActivitySpecieEntityController],
  exports: [LandingActivitySpecieService],
})
export class LandingActivitySpecieModule {}
