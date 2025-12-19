import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationReceiptsDto } from './create-application-receipts.dto';

export class UpdateApplicationReceiptsDto extends PartialType(CreateApplicationReceiptsDto) {}