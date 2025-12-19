import { Module } from '@nestjs/common';
import { VesselLicenseDocumentFilesService } from './vessel-license-document-files.service';
import { VesselLicenseDocumentFilesController } from './vessel-license-document-files.controller';
import { VesselLicenseDocumentFilesEntity } from './vessel-license-document-files.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseDocumentFilesEntity])],
  providers: [VesselLicenseDocumentFilesService],
  controllers: [VesselLicenseDocumentFilesController],
  exports: [VesselLicenseDocumentFilesService],
})
export class VesselLicenseDocumentFilesModule {}