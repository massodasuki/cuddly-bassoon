import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselExtraFileDto } from './create-ppv04a-vessel-extra-file.dto';

export class UpdatePpv04aVesselExtraFileDto extends PartialType(CreatePpv04aVesselExtraFileDto) {}