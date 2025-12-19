import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselArchiveDto } from './create-ppv04a-vessel-archive.dto';

export class UpdatePpv04aVesselArchiveDto extends PartialType(CreatePpv04aVesselArchiveDto) {}