import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInformationDto } from './create-kpv03-vessel-license-application-information.dto';

export class UpdateKpv03VesselLicenseApplicationInformationDto extends PartialType(CreateKpv03VesselLicenseApplicationInformationDto) {}