import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseDocumentsService } from './vessel-license-documents.service';
import { CreateVesselLicenseDocumentsDto } from './dto/create-vessel-license-documents.dto';
import { UpdateVesselLicenseDocumentsDto } from './dto/update-vessel-license-documents.dto';

@Controller('vessel_license_documents')
export class VesselLicenseDocumentsController {
  constructor(private readonly vessellicensedocumentsservice: VesselLicenseDocumentsService) {}

  @Post()
  create(@Body() createVesselLicenseDocumentsDto: CreateVesselLicenseDocumentsDto) {
    return this.vessellicensedocumentsservice.create(createVesselLicenseDocumentsDto);
  }

  @Get()
  findAll() {
    return this.vessellicensedocumentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicensedocumentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicensedocumentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseDocumentsDto: UpdateVesselLicenseDocumentsDto) {
    return this.vessellicensedocumentsservice.update(id, updateVesselLicenseDocumentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicensedocumentsservice.remove(id);
  }
}