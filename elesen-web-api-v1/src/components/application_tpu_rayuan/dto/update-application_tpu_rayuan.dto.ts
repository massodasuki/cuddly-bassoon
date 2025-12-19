import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationTpuRayuanDto } from './create-application_tpu_rayuan.dto';

export class UpdateApplicationTpuRayuanDto extends PartialType(CreateApplicationTpuRayuanDto) {}