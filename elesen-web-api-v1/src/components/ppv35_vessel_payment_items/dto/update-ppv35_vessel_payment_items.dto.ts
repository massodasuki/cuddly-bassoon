import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv35VesselPaymentItemsDto } from './create-ppv35_vessel_payment_items.dto';

export class UpdatePpv35VesselPaymentItemsDto extends PartialType(CreatePpv35VesselPaymentItemsDto) {}