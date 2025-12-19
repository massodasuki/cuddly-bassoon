import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv35VesselPaymentItemsDto } from './create-ppv35-vessel-payment-items.dto';

export class UpdatePpv35VesselPaymentItemsDto extends PartialType(CreatePpv35VesselPaymentItemsDto) {}