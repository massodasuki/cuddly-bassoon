import { Module } from '@nestjs/common';
import { DaratVesselEngineHistorieService } from './darat-vessel-engine-histories.service';
import { DaratVesselEngineHistorieEntityController } from './darat-vessel-engine-histories.controller';
import { DaratVesselEngineHistorieEntity } from './darat-vessel-engine-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselEngineHistorieEntity])],
  providers: [DaratVesselEngineHistorieService],
  controllers: [DaratVesselEngineHistorieEntityController],
  exports: [DaratVesselEngineHistorieService],
})
export class DaratVesselEngineHistorieModule {}

