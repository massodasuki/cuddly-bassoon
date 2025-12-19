import { Module } from '@nestjs/common';
import { LpiFishingGearsService } from './lpi_fishing_gears.service';
import { LpiFishingGearsController } from './lpi_fishing_gears.controller';
import { LpiFishingGearsEntity } from './lpi_fishing_gears.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LpiFishingGearsEntity])],
  providers: [LpiFishingGearsService],
  controllers: [LpiFishingGearsController],
  exports: [LpiFishingGearsService],
})
export class LpiFishingGearsModule {}