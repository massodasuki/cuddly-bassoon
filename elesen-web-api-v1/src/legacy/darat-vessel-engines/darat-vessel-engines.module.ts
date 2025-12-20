import { Module } from '@nestjs/common';
import { DaratVesselEngineService } from './darat-vessel-engines.service';
import { DaratVesselEngineEntityController } from './darat-vessel-engines.controller';
import { DaratVesselEngineEntity } from './darat-vessel-engines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselEngineEntity])],
  providers: [DaratVesselEngineService],
  controllers: [DaratVesselEngineEntityController],
  exports: [DaratVesselEngineService],
})
export class DaratVesselEngineModule {}

