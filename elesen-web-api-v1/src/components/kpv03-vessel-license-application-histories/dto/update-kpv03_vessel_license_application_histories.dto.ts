import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationHistoriesDto } from './create-kpv03_vessel_license_application_histories.dto';

export class UpdateKpv03VesselLicenseApplicationHistoriesDto extends PartialType(CreateKpv03VesselLicenseApplicationHistoriesDto) {}