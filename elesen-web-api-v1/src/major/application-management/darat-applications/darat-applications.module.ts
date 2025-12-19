import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaratApplicationsController } from './darat-applications.controller';
import { DaratApplicationsService } from './darat-applications.service';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { DaratVesselEntity } from '../darat-vessels/darat-vessels.entity';
import { DaratVesselInspectionEntity } from '../darat-vessel-inspections/darat-vessel-inspections.entity';
import { CodeMaster } from '../code-masters/code-masters.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DaratApplicationEntity,
      DaratVesselEntity,
      DaratVesselInspectionEntity,
      CodeMaster,
    ]),
  ],
  controllers: [DaratApplicationsController],
  providers: [DaratApplicationsService],
  exports: [DaratApplicationsService],
})
export class DaratApplicationsModule {}