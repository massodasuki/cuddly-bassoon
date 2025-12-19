import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationHistoriesDto } from './create-kpv03-vessel-license-application-histories.dto';

export class UpdateKpv03VesselLicenseApplicationHistoriesDto extends PartialType(CreateKpv03VesselLicenseApplicationHistoriesDto) {}