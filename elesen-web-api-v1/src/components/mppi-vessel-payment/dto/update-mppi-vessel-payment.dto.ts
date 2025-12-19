import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselPaymentDto } from './create-mppi-vessel-payment.dto';

export class UpdateMppiVesselPaymentDto extends PartialType(CreateMppiVesselPaymentDto) {}