import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselLogDto } from './create-ppv04a_vessel_log.dto';

export class UpdatePpv04aVesselLogDto extends PartialType(CreatePpv04aVesselLogDto) {}