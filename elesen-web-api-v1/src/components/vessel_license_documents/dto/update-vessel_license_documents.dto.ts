import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseDocumentsDto } from './create-vessel_license_documents.dto';

export class UpdateVesselLicenseDocumentsDto extends PartialType(CreateVesselLicenseDocumentsDto) {}