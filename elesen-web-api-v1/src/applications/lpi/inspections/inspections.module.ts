import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionsService } from './inspections.service';
import { InspectionsController } from './inspections.controller';
import { LpiInspection } from './inspections.entity';
import { ApplicationsV2Entity } from '../../../legacy/applications-v2/applications-v2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LpiInspection])],
  controllers: [InspectionsController],
  providers: [InspectionsService],
  exports: [InspectionsService],
})
export class InspectionsModule {}