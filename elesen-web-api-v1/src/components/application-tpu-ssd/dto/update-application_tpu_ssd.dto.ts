import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuSsdDto } from './create-application_tpu_ssd.dto';

export class UpdateApplicationTpuSsdDto extends PartialType(CreateApplicationTpuSsdDto) {}