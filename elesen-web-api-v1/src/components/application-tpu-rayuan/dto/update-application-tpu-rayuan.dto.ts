import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuRayuanDto } from './create-application-tpu-rayuan.dto';

export class UpdateApplicationTpuRayuanDto extends PartialType(CreateApplicationTpuRayuanDto) {}