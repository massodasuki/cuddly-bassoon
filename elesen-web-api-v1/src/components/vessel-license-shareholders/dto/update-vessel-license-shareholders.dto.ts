import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseShareholdersDto } from './create-vessel-license-shareholders.dto';

export class UpdateVesselLicenseShareholdersDto extends PartialType(CreateVesselLicenseShareholdersDto) {}