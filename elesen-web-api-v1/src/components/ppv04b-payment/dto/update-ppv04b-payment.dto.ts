import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04bPaymentDto } from './create-ppv04b-payment.dto';

export class UpdatePpv04bPaymentDto extends PartialType(CreatePpv04bPaymentDto) {}