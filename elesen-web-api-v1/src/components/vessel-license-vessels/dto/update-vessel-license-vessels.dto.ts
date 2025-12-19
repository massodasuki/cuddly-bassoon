import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseVesselsDto } from './create-vessel-license-vessels.dto';

export class UpdateVesselLicenseVesselsDto extends PartialType(CreateVesselLicenseVesselsDto) {}