import { PartialType } from '@nestjs/mapped-types';
import { CreatePermohonan04aDto } from './create-permohonan_04a.dto';

export class UpdatePermohonan04aDto extends PartialType(CreatePermohonan04aDto) {}