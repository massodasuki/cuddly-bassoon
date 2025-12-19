import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseDirectorsDto } from './create-vessel_license_directors.dto';

export class UpdateVesselLicenseDirectorsDto extends PartialType(CreateVesselLicenseDirectorsDto) {}