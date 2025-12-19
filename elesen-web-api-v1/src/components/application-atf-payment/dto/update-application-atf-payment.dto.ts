import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationAtfPaymentDto } from './create-application-atf-payment.dto';

export class UpdateApplicationAtfPaymentDto extends PartialType(CreateApplicationAtfPaymentDto) {}