import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInspectionItemsDto } from './create-kpv03-vessel-license-application-inspection-items.dto';

export class UpdateKpv03VesselLicenseApplicationInspectionItemsDto extends PartialType(CreateKpv03VesselLicenseApplicationInspectionItemsDto) {}