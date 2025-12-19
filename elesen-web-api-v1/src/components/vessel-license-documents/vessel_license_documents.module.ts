import { Module } from '@nestjs/common';
import { VesselLicenseDocumentsService } from './vessel_license_documents.service';
import { VesselLicenseDocumentsController } from './vessel_license_documents.controller';
import { VesselLicenseDocumentsEntity } from './vessel_license_documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseDocumentsEntity])],
  providers: [VesselLicenseDocumentsService],
  controllers: [VesselLicenseDocumentsController],
  exports: [VesselLicenseDocumentsService],
})
export class VesselLicenseDocumentsModule {}