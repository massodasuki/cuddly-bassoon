import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseApplicationsDto } from './create-vessel-license-applications.dto';

export class UpdateVesselLicenseApplicationsDto extends PartialType(CreateVesselLicenseApplicationsDto) {}