import { Module } from '@nestjs/common';
import { AppointmentsInspectionsService } from './appointments-inspections.service';
import { AppointmentsInspectionsController } from './appointments-inspections.controller';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { DaratApplicationEntity } from '../../darat/entities/darat-applications.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageUploadService } from './image-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentsInspections, DaratApplicationEntity])],
  providers: [AppointmentsInspectionsService, ImageUploadService],
  controllers: [AppointmentsInspectionsController],
  exports: [AppointmentsInspectionsService],
})
export class AppointmentsInspectionsModule {}
