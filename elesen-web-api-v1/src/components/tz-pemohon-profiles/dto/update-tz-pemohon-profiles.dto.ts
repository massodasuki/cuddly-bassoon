import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPemohonProfilesDto } from './create-tz-pemohon-profiles.dto';

export class UpdateTzPemohonProfilesDto extends PartialType(CreateTzPemohonProfilesDto) {}