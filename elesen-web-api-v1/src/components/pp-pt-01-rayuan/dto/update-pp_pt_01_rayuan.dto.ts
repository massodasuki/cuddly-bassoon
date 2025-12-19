import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01RayuanDto } from './create-pp_pt_01_rayuan.dto';

export class UpdatePpPt01RayuanDto extends PartialType(CreatePpPt01RayuanDto) {}