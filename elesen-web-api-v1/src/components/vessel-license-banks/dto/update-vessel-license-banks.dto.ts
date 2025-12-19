import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseBanksDto } from './create-vessel-license-banks.dto';

export class UpdateVesselLicenseBanksDto extends PartialType(CreateVesselLicenseBanksDto) {}