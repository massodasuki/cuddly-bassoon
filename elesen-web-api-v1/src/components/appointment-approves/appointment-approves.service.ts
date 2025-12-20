import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentApprove } from './appointment-approves.entity';
import { CreateAppointmentApproveDto } from './dto/create-appointment-approve.dto';
import { UpdateAppointmentApproveDto } from './dto/update-appointment-approve.dto';

@Injectable()
export class AppointmentApprovesService {
  constructor(
    @InjectRepository(AppointmentApprove)
    private appointmentApprovesRepository: Repository<AppointmentApprove>,
  ) {}

  findAll(): Promise<AppointmentApprove[]> {
    return this.appointmentApprovesRepository.find();
  }

  async findOne(id: string): Promise<AppointmentApprove> {
    const appointmentApprove = await this.appointmentApprovesRepository.findOneBy({ id });
    if (!appointmentApprove) {
      throw new Error('AppointmentApprove not found');
    }
    return appointmentApprove;
  }

  async create(createAppointmentApproveDto: CreateAppointmentApproveDto): Promise<AppointmentApprove> {
    const appointmentApprove = this.appointmentApprovesRepository.create(createAppointmentApproveDto);
    return this.appointmentApprovesRepository.save(appointmentApprove);
  }

  async update(id: string, updateAppointmentApproveDto: UpdateAppointmentApproveDto): Promise<AppointmentApprove> {
    await this.appointmentApprovesRepository.update(id, updateAppointmentApproveDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.appointmentApprovesRepository.delete(id);
  }
}
