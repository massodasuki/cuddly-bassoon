import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseApplicationsDto } from './create-vessel_license_applications.dto';

export class UpdateVesselLicenseApplicationsDto extends PartialType(CreateVesselLicenseApplicationsDto) {}