import { PartialType } from '@nestjs/mapped-types';
import { CreatePpPt01RayuanDto } from './create-pp-pt-01-rayuan.dto';

export class UpdatePpPt01RayuanDto extends PartialType(CreatePpPt01RayuanDto) {}