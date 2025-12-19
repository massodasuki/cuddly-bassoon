import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselPaymentDto } from './create-mppi_vessel_payment.dto';

export class UpdateMppiVesselPaymentDto extends PartialType(CreateMppiVesselPaymentDto) {}