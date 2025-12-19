import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionCatchesService } from './kpv03-vessel-license-application-inspection-catches.service';
import { CreateKpv03VesselLicenseApplicationInspectionCatchesDto } from './dto/create-kpv03-vessel-license-application-inspection-catches.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionCatchesDto } from './dto/update-kpv03-vessel-license-application-inspection-catches.dto';

@Controller('kpv03_vessel_license_application_inspection_catches')
export class Kpv03VesselLicenseApplicationInspectionCatchesController {
  constructor(private readonly kpv03vessellicenseapplicationinspectioncatchesservice: Kpv03VesselLicenseApplicationInspectionCatchesService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionCatchesDto: CreateKpv03VesselLicenseApplicationInspectionCatchesDto) {
    return this.kpv03vessellicenseapplicationinspectioncatchesservice.create(createKpv03VesselLicenseApplicationInspectionCatchesDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectioncatchesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectioncatchesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectioncatchesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionCatchesDto: UpdateKpv03VesselLicenseApplicationInspectionCatchesDto) {
    return this.kpv03vessellicenseapplicationinspectioncatchesservice.update(id, updateKpv03VesselLicenseApplicationInspectionCatchesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectioncatchesservice.remove(id);
  }
}