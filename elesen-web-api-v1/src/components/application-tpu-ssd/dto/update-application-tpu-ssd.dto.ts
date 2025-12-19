import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuSsdDto } from './create-application-tpu-ssd.dto';

export class UpdateApplicationTpuSsdDto extends PartialType(CreateApplicationTpuSsdDto) {}