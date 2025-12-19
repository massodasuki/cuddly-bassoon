import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationFinancesDto } from './create-kpv03_vessel_license_application_finances.dto';

export class UpdateKpv03VesselLicenseApplicationFinancesDto extends PartialType(CreateKpv03VesselLicenseApplicationFinancesDto) {}