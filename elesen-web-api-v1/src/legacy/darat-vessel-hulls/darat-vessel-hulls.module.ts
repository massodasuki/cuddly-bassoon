import { Module } from '@nestjs/common';
import { DaratVesselHullService } from './darat-vessel-hulls.service';
import { DaratVesselHullEntityController } from './darat-vessel-hulls.controller';
import { DaratVesselHullEntity } from './darat-vessel-hulls.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselHullEntity])],
  providers: [DaratVesselHullService],
  controllers: [DaratVesselHullEntityController],
  exports: [DaratVesselHullService],
})
export class DaratVesselHullModule {}

