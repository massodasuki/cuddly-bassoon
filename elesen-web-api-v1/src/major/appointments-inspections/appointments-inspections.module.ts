import { Module } from '@nestjs/common';
import { AppointmentsInspectionsService } from './appointments-inspections.service';
import { AppointmentsInspectionsController } from './appointments-inspections.controller';
import { AppointmentsInspections } from './appointments-inspections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentsInspections])],
  providers: [AppointmentsInspectionsService],
  controllers: [AppointmentsInspectionsController],
  exports: [AppointmentsInspectionsService],
})
export class AppointmentsInspectionsModule {}