import { PartialType } from '@nestjs/mapped-types';
import { CreatePpv04aVesselPemantauanDto } from './create-ppv04a-vessel-pemantauan.dto';

export class UpdatePpv04aVesselPemantauanDto extends PartialType(CreatePpv04aVesselPemantauanDto) {}