import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseDocumentFilesDto } from './create-vessel_license_document_files.dto';

export class UpdateVesselLicenseDocumentFilesDto extends PartialType(CreateVesselLicenseDocumentFilesDto) {}