import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01RayuanLampiranDto } from './create-pp_pt_01_rayuan_lampiran.dto';

export class UpdatePpPt01RayuanLampiranDto extends PartialType(CreatePpPt01RayuanLampiranDto) {}