import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseAppIvResultDto } from './create-vessel-license-app-iv-result.dto';

export class UpdateVesselLicenseAppIvResultDto extends PartialType(CreateVesselLicenseAppIvResultDto) {}