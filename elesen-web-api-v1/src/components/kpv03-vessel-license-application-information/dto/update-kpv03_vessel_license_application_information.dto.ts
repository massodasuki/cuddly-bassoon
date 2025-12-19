import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationInformationDto } from './create-kpv03_vessel_license_application_information.dto';

export class UpdateKpv03VesselLicenseApplicationInformationDto extends PartialType(CreateKpv03VesselLicenseApplicationInformationDto) {}