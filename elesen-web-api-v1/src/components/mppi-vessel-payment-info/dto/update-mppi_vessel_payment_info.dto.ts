import { PartialType } from '@nestjs/mapped-types';
import { CreateMppiVesselPaymentInfoDto } from './create-mppi_vessel_payment_info.dto';

export class UpdateMppiVesselPaymentInfoDto extends PartialType(CreateMppiVesselPaymentInfoDto) {}