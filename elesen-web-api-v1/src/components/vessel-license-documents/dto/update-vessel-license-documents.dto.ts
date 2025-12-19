import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseDocumentsDto } from './create-vessel-license-documents.dto';

export class UpdateVesselLicenseDocumentsDto extends PartialType(CreateVesselLicenseDocumentsDto) {}