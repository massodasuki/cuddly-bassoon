import { PartialType } from '@nestjs/mapped-types';
import { CreateTzPemohonProfilesDto } from './create-tz_pemohon_profiles.dto';

export class UpdateTzPemohonProfilesDto extends PartialType(CreateTzPemohonProfilesDto) {}