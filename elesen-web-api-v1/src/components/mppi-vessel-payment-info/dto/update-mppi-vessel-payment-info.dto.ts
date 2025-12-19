import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselPaymentInfoDto } from './create-mppi-vessel-payment-info.dto';

export class UpdateMppiVesselPaymentInfoDto extends PartialType(CreateMppiVesselPaymentInfoDto) {}