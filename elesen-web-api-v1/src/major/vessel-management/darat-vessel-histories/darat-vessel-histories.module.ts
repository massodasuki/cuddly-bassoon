import { Module } from '@nestjs/common';
import { DaratVesselHistorieService } from './darat-vessel-histories.service';
import { DaratVesselHistorieEntityController } from './darat-vessel-histories.controller';
import { DaratVesselHistorieEntity } from './darat-vessel-histories.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselHistorieEntity])],
  providers: [DaratVesselHistorieService],
  controllers: [DaratVesselHistorieEntityController],
  exports: [DaratVesselHistorieService],
})
export class DaratVesselHistorieModule {}
