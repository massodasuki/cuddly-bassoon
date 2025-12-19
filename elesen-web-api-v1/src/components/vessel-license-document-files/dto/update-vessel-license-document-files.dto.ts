import { PartialType } from '@nestjs/mapped-types';
import { CreateVesselLicenseDocumentFilesDto } from './create-vessel-license-document-files.dto';

export class UpdateVesselLicenseDocumentFilesDto extends PartialType(CreateVesselLicenseDocumentFilesDto) {}