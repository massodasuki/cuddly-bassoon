import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationAtfPaymentDto } from './create-application_atf_payment.dto';

export class UpdateApplicationAtfPaymentDto extends PartialType(CreateApplicationAtfPaymentDto) {}