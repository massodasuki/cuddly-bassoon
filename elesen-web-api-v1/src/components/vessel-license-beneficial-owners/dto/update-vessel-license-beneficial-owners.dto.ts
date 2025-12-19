import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseBeneficialOwnersDto } from './create-vessel-license-beneficial-owners.dto';

export class UpdateVesselLicenseBeneficialOwnersDto extends PartialType(CreateVesselLicenseBeneficialOwnersDto) {}