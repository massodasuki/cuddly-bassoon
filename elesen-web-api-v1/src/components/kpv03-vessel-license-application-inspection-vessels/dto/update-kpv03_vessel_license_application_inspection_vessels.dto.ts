import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInspectionVesselsDto } from './create-kpv03_vessel_license_application_inspection_vessels.dto';

export class UpdateKpv03VesselLicenseApplicationInspectionVesselsDto extends PartialType(CreateKpv03VesselLicenseApplicationInspectionVesselsDto) {}