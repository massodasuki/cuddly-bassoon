import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseBeneficialOwnersDto } from './create-vessel_license_beneficial_owners.dto';

export class UpdateVesselLicenseBeneficialOwnersDto extends PartialType(CreateVesselLicenseBeneficialOwnersDto) {}