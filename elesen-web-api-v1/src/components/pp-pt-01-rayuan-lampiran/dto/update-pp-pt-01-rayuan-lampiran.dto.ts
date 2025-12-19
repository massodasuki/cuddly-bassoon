import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01RayuanLampiranDto } from './create-pp-pt-01-rayuan-lampiran.dto';

export class UpdatePpPt01RayuanLampiranDto extends PartialType(CreatePpPt01RayuanLampiranDto) {}