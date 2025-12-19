import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselPaymentInfoDto } from './create-ppv04a_vessel_payment_info.dto';

export class UpdatePpv04aVesselPaymentInfoDto extends PartialType(CreatePpv04aVesselPaymentInfoDto) {}