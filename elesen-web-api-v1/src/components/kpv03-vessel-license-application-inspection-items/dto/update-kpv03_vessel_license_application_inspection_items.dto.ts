import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInspectionItemsDto } from './create-kpv03_vessel_license_application_inspection_items.dto';

export class UpdateKpv03VesselLicenseApplicationInspectionItemsDto extends PartialType(CreateKpv03VesselLicenseApplicationInspectionItemsDto) {}