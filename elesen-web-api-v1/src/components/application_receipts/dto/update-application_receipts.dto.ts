import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationReceiptsDto } from './create-application_receipts.dto';

export class UpdateApplicationReceiptsDto extends PartialType(CreateApplicationReceiptsDto) {}