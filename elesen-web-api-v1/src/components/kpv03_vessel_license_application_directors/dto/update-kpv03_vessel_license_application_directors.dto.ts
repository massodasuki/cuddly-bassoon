import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationDirectorsDto } from './create-kpv03_vessel_license_application_directors.dto';

export class UpdateKpv03VesselLicenseApplicationDirectorsDto extends PartialType(CreateKpv03VesselLicenseApplicationDirectorsDto) {}