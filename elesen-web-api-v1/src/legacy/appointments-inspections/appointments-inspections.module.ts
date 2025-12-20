import { Module } from '@nestjs/common';
import { AppointmentsInspectionsService } from './appointments-inspections.service';
import { AppointmentsInspectionsController } from './appointments-inspections.controller';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { DaratApplicationEntity } from '../darat-applications/darat-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaratApplicationsModule } from '../darat-applications/darat-applications.module';
import { ImageUploadService } from './image-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentsInspections, DaratApplicationEntity]), DaratApplicationsModule],
  providers: [AppointmentsInspectionsService, ImageUploadService],
  controllers: [AppointmentsInspectionsController],
  exports: [AppointmentsInspectionsService],
})
export class AppointmentsInspectionsModule {}
