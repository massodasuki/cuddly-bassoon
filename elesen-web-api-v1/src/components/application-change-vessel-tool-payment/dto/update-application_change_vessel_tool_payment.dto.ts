import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationChangeVesselToolPaymentDto } from './create-application_change_vessel_tool_payment.dto';

export class UpdateApplicationChangeVesselToolPaymentDto extends PartialType(CreateApplicationChangeVesselToolPaymentDto) {}