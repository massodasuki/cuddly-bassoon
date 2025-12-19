import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionSecuritiesService } from './kpv03-vessel-license-application-inspection-securities.service';
import { CreateKpv03VesselLicenseApplicationInspectionSecuritiesDto } from './dto/create-kpv03-vessel-license-application-inspection-securities.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionSecuritiesDto } from './dto/update-kpv03-vessel-license-application-inspection-securities.dto';

@Controller('kpv03_vessel_license_application_inspection_securities')
export class Kpv03VesselLicenseApplicationInspectionSecuritiesController {
  constructor(private readonly kpv03vessellicenseapplicationinspectionsecuritiesservice: Kpv03VesselLicenseApplicationInspectionSecuritiesService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionSecuritiesDto: CreateKpv03VesselLicenseApplicationInspectionSecuritiesDto) {
    return this.kpv03vessellicenseapplicationinspectionsecuritiesservice.create(createKpv03VesselLicenseApplicationInspectionSecuritiesDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectionsecuritiesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionsecuritiesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectionsecuritiesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionSecuritiesDto: UpdateKpv03VesselLicenseApplicationInspectionSecuritiesDto) {
    return this.kpv03vessellicenseapplicationinspectionsecuritiesservice.update(id, updateKpv03VesselLicenseApplicationInspectionSecuritiesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionsecuritiesservice.remove(id);
  }
}