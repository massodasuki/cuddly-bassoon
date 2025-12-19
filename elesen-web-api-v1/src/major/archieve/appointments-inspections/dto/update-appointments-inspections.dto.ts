import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentsInspectionsDto } from './create-appointments-inspections.dto';

export class UpdateAppointmentsInspectionsDto extends PartialType(CreateAppointmentsInspectionsDto) {}