import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Appointment } from './entities/appointment.entity';
import { Vessels } from 'src/vessels/entities/vessel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Vessels])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
