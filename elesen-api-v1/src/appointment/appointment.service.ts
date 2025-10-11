import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { ImageUploadService } from './image-upload.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    private readonly imageUploadService: ImageUploadService,
  ) {}

  async createAppointment(body: CreateAppointmentDto, files: Express.Multer.File[], res: any) {
    // Upload images and map to URLs
    const uploadedUrls: { [key: string]: string } = {};

    for (const file of files) {
      const url = await this.imageUploadService.uploadImage(file);
      uploadedUrls[file.fieldname] = url;
    }

    // Map uploaded URL to suratWakilImg
    if (body.appointment?.kehadiran?.wakil) {
      body.appointment.kehadiran.wakil.suratWakilImg = uploadedUrls['suratWakilImg'] || body.appointment.kehadiran.wakil.suratWakilImg;
    }

    // Save to DB
    const appointment = this.appointmentRepository.create(body.appointment as any);
    await this.appointmentRepository.save(appointment);

    return res.status(201).json({ message: 'Appointment created', id: appointment });
  }
}