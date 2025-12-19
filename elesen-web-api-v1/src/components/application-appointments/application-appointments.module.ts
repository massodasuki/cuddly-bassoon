import { Module } from '@nestjs/common';
import { ApplicationAppointmentService } from './application-appointments.service';
import { ApplicationAppointmentController } from './application-appointments.controller';
import { ApplicationAppointmentEntity } from './application-appointments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationAppointmentEntity])],
  providers: [ApplicationAppointmentService],
  controllers: [ApplicationAppointmentController],
  exports: [ApplicationAppointmentService],
})
export class ApplicationAppointmentModule {}