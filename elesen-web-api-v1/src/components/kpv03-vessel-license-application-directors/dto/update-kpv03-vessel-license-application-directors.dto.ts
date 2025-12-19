import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationDirectorsDto } from './create-kpv03-vessel-license-application-directors.dto';

export class UpdateKpv03VesselLicenseApplicationDirectorsDto extends PartialType(CreateKpv03VesselLicenseApplicationDirectorsDto) {}