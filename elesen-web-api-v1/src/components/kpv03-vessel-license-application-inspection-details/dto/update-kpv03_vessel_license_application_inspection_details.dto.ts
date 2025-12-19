import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInspectionDetailsDto } from './create-kpv03_vessel_license_application_inspection_details.dto';

export class UpdateKpv03VesselLicenseApplicationInspectionDetailsDto extends PartialType(CreateKpv03VesselLicenseApplicationInspectionDetailsDto) {}