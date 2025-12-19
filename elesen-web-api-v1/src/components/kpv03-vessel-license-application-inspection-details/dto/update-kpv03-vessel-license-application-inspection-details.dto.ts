import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInspectionDetailsDto } from './create-kpv03-vessel-license-application-inspection-details.dto';

export class UpdateKpv03VesselLicenseApplicationInspectionDetailsDto extends PartialType(CreateKpv03VesselLicenseApplicationInspectionDetailsDto) {}