import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationFinancesDto } from './create-kpv03-vessel-license-application-finances.dto';

export class UpdateKpv03VesselLicenseApplicationFinancesDto extends PartialType(CreateKpv03VesselLicenseApplicationFinancesDto) {}