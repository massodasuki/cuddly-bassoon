import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { ImageUploadService } from './image-upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Kehadiran } from './entities/kehadiran.entity';
import { Wakil } from './entities/wakil.entity';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService, ImageUploadService],
  imports: [
    TypeOrmModule.forFeature([
      Appointment,
      Kehadiran,
      Wakil,
    ]),
  ],
})
export class AppointmentModule {}