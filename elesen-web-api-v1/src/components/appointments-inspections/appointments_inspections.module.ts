import { Module } from '@nestjs/common';
import { AppointmentsInspectionsService } from './appointments_inspections.service';
import { AppointmentsInspectionsController } from './appointments_inspections.controller';
import { AppointmentsInspectionsEntity } from './appointments_inspections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentsInspectionsEntity])],
  providers: [AppointmentsInspectionsService],
  controllers: [AppointmentsInspectionsController],
  exports: [AppointmentsInspectionsService],
})
export class AppointmentsInspectionsModule {}