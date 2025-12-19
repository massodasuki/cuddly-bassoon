import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentsInspectionsDto } from './create-appointments_inspections.dto';

export class UpdateAppointmentsInspectionsDto extends PartialType(CreateAppointmentsInspectionsDto) {}