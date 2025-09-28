import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { Vessels } from 'src/vessels/entities/vessel.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    @InjectRepository(Vessels)
    private vesselRepository: Repository<Vessels>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const appointment = this.appointmentRepository.create();

    // Set basic properties
    appointment.tarikhPemeriksaan = new Date(createAppointmentDto.tarikhPemeriksaan);
    if (createAppointmentDto.status !== undefined) {
      appointment.status = createAppointmentDto.status;
    }
    if (createAppointmentDto.penyediaanLaporan !== undefined) {
      appointment.penyediaanLaporan = createAppointmentDto.penyediaanLaporan;
    }
    if (createAppointmentDto.kehadiran !== undefined) {
      appointment.kehadiran = createAppointmentDto.kehadiran;
    }
    if (createAppointmentDto.dihadiri !== undefined) {
      appointment.dihadiri = createAppointmentDto.dihadiri;
    }

    if (createAppointmentDto.vesselId) {
      const vessel = await this.vesselRepository.findOne({ where: { id: createAppointmentDto.vesselId } });
      if (!vessel) {
        throw new NotFoundException(`Vessel with ID ${createAppointmentDto.vesselId} not found`);
      }
      appointment.vessel = vessel;
    }

    return this.appointmentRepository.save(appointment);
  }

  async findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find({
      relations: ['vessel'],
    });
  }

  async findOne(id: string): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
      relations: ['vessel'],
    });

    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    return appointment;
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    const appointment = await this.findOne(id);

    // Update basic properties if provided
    if (updateAppointmentDto.tarikhPemeriksaan) {
      appointment.tarikhPemeriksaan = new Date(updateAppointmentDto.tarikhPemeriksaan);
    }

    if (updateAppointmentDto.status !== undefined) {
      appointment.status = updateAppointmentDto.status;
    }

    if (updateAppointmentDto.penyediaanLaporan !== undefined) {
      appointment.penyediaanLaporan = updateAppointmentDto.penyediaanLaporan;
    }

    if (updateAppointmentDto.kehadiran !== undefined) {
      appointment.kehadiran = updateAppointmentDto.kehadiran;
    }

    if (updateAppointmentDto.dihadiri !== undefined) {
      appointment.dihadiri = updateAppointmentDto.dihadiri;
    }

    if (updateAppointmentDto.vesselId) {
      const vessel = await this.vesselRepository.findOne({ where: { id: updateAppointmentDto.vesselId } });
      if (!vessel) {
        throw new NotFoundException(`Vessel with ID ${updateAppointmentDto.vesselId} not found`);
      }
      appointment.vessel = vessel;
    }

    return this.appointmentRepository.save(appointment);
  }

  async remove(id: string): Promise<void> {
    const appointment = await this.findOne(id);
    await this.appointmentRepository.remove(appointment);
  }
}
