import { Module } from '@nestjs/common';
import { LandingWaterTypeService } from './landing-water-types.service';
import { LandingWaterTypeEntityController } from './landing-water-types.controller';
import { LandingWaterTypeEntity } from './landing-water-types.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LandingWaterTypeEntity])],
  providers: [LandingWaterTypeService],
  controllers: [LandingWaterTypeEntityController],
  exports: [LandingWaterTypeService],
})
export class LandingWaterTypeModule {}
