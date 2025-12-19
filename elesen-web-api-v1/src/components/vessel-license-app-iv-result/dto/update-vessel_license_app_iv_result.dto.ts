import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseAppIvResultDto } from './create-vessel_license_app_iv_result.dto';

export class UpdateVesselLicenseAppIvResultDto extends PartialType(CreateVesselLicenseAppIvResultDto) {}