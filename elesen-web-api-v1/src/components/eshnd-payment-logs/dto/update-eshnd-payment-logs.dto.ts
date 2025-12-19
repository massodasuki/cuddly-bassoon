import { PartialType } from '@nestjs/mapped-types';
import { CreateEshndPaymentLogsDto } from './create-eshnd-payment-logs.dto';

export class UpdateEshndPaymentLogsDto extends PartialType(CreateEshndPaymentLogsDto) {}