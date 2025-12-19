import { Module } from '@nestjs/common';
import { ApplicationAppointmentsService } from './application_appointments.service';
import { ApplicationAppointmentsController } from './application_appointments.controller';
import { ApplicationAppointmentsEntity } from './application_appointments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationAppointmentsEntity])],
  providers: [ApplicationAppointmentsService],
  controllers: [ApplicationAppointmentsController],
  exports: [ApplicationAppointmentsService],
})
export class ApplicationAppointmentsModule {}