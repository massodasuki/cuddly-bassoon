import { PartialType } from '@nestjs/mapped-types';
import { CreateKpv03VesselLicenseApplicationShareholdersDto } from './create-kpv03-vessel-license-application-shareholders.dto';

export class UpdateKpv03VesselLicenseApplicationShareholdersDto extends PartialType(CreateKpv03VesselLicenseApplicationShareholdersDto) {}