import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseBanksDto } from './create-vessel_license_banks.dto';

export class UpdateVesselLicenseBanksDto extends PartialType(CreateVesselLicenseBanksDto) {}