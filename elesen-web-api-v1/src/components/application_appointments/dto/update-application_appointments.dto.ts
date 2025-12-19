import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationAppointmentsDto } from './create-application_appointments.dto';

export class UpdateApplicationAppointmentsDto extends PartialType(CreateApplicationAppointmentsDto) {}