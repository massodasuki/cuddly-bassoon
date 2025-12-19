import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseShareholdersDto } from './create-vessel_license_shareholders.dto';

export class UpdateVesselLicenseShareholdersDto extends PartialType(CreateVesselLicenseShareholdersDto) {}