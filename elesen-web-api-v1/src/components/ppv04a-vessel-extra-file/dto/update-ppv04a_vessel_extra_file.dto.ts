import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselExtraFileDto } from './create-ppv04a_vessel_extra_file.dto';

export class UpdatePpv04aVesselExtraFileDto extends PartialType(CreatePpv04aVesselExtraFileDto) {}