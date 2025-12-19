import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuReceiptsDto } from './create-application-tpu-receipts.dto';

export class UpdateApplicationTpuReceiptsDto extends PartialType(CreateApplicationTpuReceiptsDto) {}