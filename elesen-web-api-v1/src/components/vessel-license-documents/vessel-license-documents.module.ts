import { Module } from '@nestjs/common';
import { VesselLicenseDocumentsService } from './vessel-license-documents.service';
import { VesselLicenseDocumentsController } from './vessel-license-documents.controller';
import { VesselLicenseDocumentsEntity } from './vessel-license-documents.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VesselLicenseDocumentsEntity])],
  providers: [VesselLicenseDocumentsService],
  controllers: [VesselLicenseDocumentsController],
  exports: [VesselLicenseDocumentsService],
})
export class VesselLicenseDocumentsModule {}