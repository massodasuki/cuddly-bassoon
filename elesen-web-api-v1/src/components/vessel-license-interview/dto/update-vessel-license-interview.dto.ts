import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseInterviewDto } from './create-vessel-license-interview.dto';

export class UpdateVesselLicenseInterviewDto extends PartialType(CreateVesselLicenseInterviewDto) {}