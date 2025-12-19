import { PartialType } from '@nestjs/mapped-types';
import { CreateEshndPaymentLogsDto } from './create-eshnd_payment_logs.dto';

export class UpdateEshndPaymentLogsDto extends PartialType(CreateEshndPaymentLogsDto) {}