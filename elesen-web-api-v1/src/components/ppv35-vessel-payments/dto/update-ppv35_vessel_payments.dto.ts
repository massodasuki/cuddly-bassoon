import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv35VesselPaymentsDto } from './create-ppv35_vessel_payments.dto';

export class UpdatePpv35VesselPaymentsDto extends PartialType(CreatePpv35VesselPaymentsDto) {}