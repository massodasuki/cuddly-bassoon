import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseInterviewDto } from './create-vessel_license_interview.dto';

export class UpdateVesselLicenseInterviewDto extends PartialType(CreateVesselLicenseInterviewDto) {}