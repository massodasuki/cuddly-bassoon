import { Module } from '@nestjs/common';
import { DaratVesselHullHistorieService } from './darat-vessel-hull-histories.service';
import { DaratVesselHullHistorieEntityController } from './darat-vessel-hull-histories.controller';
import { DaratVesselHullHistorieEntity } from './darat-vessel-hull-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselHullHistorieEntity])],
  providers: [DaratVesselHullHistorieService],
  controllers: [DaratVesselHullHistorieEntityController],
  exports: [DaratVesselHullHistorieService],
})
export class DaratVesselHullHistorieModule {}

