import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselPemantauanDto } from './create-ppv04a_vessel_pemantauan.dto';

export class UpdatePpv04aVesselPemantauanDto extends PartialType(CreatePpv04aVesselPemantauanDto) {}