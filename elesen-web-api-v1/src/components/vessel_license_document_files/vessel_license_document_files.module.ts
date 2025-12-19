import { Module } from '@nestjs/common';
import { VesselLicenseDocumentFilesService } from './vessel_license_document_files.service';
import { VesselLicenseDocumentFilesController } from './vessel_license_document_files.controller';
import { VesselLicenseDocumentFilesEntity } from './vessel_license_document_files.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseDocumentFilesEntity])],
  providers: [VesselLicenseDocumentFilesService],
  controllers: [VesselLicenseDocumentFilesController],
  exports: [VesselLicenseDocumentFilesService],
})
export class VesselLicenseDocumentFilesModule {}