import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselPaymentDto } from './create-ppv04a_vessel_payment.dto';

export class UpdatePpv04aVesselPaymentDto extends PartialType(CreatePpv04aVesselPaymentDto) {}