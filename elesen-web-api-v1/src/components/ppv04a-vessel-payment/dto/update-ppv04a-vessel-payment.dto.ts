import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselPaymentDto } from './create-ppv04a-vessel-payment.dto';

export class UpdatePpv04aVesselPaymentDto extends PartialType(CreatePpv04aVesselPaymentDto) {}