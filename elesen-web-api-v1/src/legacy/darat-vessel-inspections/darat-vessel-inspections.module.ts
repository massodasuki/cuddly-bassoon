import { Module } from '@nestjs/common';
import { DaratVesselInspectionService } from './darat-vessel-inspections.service';
import { DaratVesselInspectionEntityController } from './darat-vessel-inspections.controller';
import { DaratVesselInspectionEntity } from './darat-vessel-inspections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DaratVesselInspectionEntity])],
  providers: [DaratVesselInspectionService],
  controllers: [DaratVesselInspectionEntityController],
  exports: [DaratVesselInspectionService],
})
export class DaratVesselInspectionModule {}

