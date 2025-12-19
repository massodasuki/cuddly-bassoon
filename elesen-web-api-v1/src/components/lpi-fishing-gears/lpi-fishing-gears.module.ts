import { Module } from '@nestjs/common';
import { LpiFishingGearsService } from './lpi-fishing-gears.service';
import { LpiFishingGearsController } from './lpi-fishing-gears.controller';
import { LpiFishingGearsEntity } from './lpi-fishing-gears.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiFishingGearsEntity])],
  providers: [LpiFishingGearsService],
  controllers: [LpiFishingGearsController],
  exports: [LpiFishingGearsService],
})
export class LpiFishingGearsModule {}