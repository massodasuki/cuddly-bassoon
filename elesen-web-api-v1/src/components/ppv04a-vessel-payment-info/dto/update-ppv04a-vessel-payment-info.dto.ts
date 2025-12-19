import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselPaymentInfoDto } from './create-ppv04a-vessel-payment-info.dto';

export class UpdatePpv04aVesselPaymentInfoDto extends PartialType(CreatePpv04aVesselPaymentInfoDto) {}