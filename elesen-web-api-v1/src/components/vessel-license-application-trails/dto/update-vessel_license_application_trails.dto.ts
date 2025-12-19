import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseApplicationTrailsDto } from './create-vessel_license_application_trails.dto';

export class UpdateVesselLicenseApplicationTrailsDto extends PartialType(CreateVesselLicenseApplicationTrailsDto) {}