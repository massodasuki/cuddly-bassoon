import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselArchiveDto } from './create-ppv04a_vessel_archive.dto';

export class UpdatePpv04aVesselArchiveDto extends PartialType(CreatePpv04aVesselArchiveDto) {}