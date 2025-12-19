import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseApplicationTrailsDto } from './create-vessel-license-application-trails.dto';

export class UpdateVesselLicenseApplicationTrailsDto extends PartialType(CreateVesselLicenseApplicationTrailsDto) {}