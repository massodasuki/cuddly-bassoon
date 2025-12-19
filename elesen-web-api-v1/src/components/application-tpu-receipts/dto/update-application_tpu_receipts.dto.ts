import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuReceiptsDto } from './create-application_tpu_receipts.dto';

export class UpdateApplicationTpuReceiptsDto extends PartialType(CreateApplicationTpuReceiptsDto) {}