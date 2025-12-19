import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseDocumentFilesService } from './vessel_license_document_files.service';
import { CreateVesselLicenseDocumentFilesDto } from './dto/create-vessel_license_document_files.dto';
import { UpdateVesselLicenseDocumentFilesDto } from './dto/update-vessel_license_document_files.dto';

@Controller('vessel_license_document_files')
export class VesselLicenseDocumentFilesController {
  constructor(private readonly vessellicensedocumentfilesservice: VesselLicenseDocumentFilesService) {}

  @Post()
  create(@Body() createVesselLicenseDocumentFilesDto: CreateVesselLicenseDocumentFilesDto) {
    return this.vessellicensedocumentfilesservice.create(createVesselLicenseDocumentFilesDto);
  }

  @Get()
  findAll() {
    return this.vessellicensedocumentfilesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicensedocumentfilesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicensedocumentfilesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseDocumentFilesDto: UpdateVesselLicenseDocumentFilesDto) {
    return this.vessellicensedocumentfilesservice.update(id, updateVesselLicenseDocumentFilesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicensedocumentfilesservice.remove(id);
  }
}