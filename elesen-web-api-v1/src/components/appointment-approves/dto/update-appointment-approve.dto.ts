import { PartialType } from '@nestjs/mapped-types';
import { CreateAppointmentApproveDto } from './create-appointment-approve.dto';

export class UpdateAppointmentApproveDto extends PartialType(CreateAppointmentApproveDto) {}