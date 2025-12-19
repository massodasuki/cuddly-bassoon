import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseVesselsDto } from './create-vessel_license_vessels.dto';

export class UpdateVesselLicenseVesselsDto extends PartialType(CreateVesselLicenseVesselsDto) {}