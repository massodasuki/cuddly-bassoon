import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationAppointmentDto } from './create-application-appointments.dto';

export class UpdateApplicationAppointmentDto extends PartialType(CreateApplicationAppointmentDto) {}