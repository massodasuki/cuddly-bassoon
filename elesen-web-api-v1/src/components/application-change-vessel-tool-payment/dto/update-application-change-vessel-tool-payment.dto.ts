import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationChangeVesselToolPaymentDto } from './create-application-change-vessel-tool-payment.dto';

export class UpdateApplicationChangeVesselToolPaymentDto extends PartialType(CreateApplicationChangeVesselToolPaymentDto) {}