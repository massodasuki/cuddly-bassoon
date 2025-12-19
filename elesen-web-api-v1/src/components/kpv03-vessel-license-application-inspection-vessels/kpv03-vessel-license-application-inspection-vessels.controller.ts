import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionVesselsService } from './kpv03-vessel-license-application-inspection-vessels.service';
import { CreateKpv03VesselLicenseApplicationInspectionVesselsDto } from './dto/create-kpv03-vessel-license-application-inspection-vessels.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionVesselsDto } from './dto/update-kpv03-vessel-license-application-inspection-vessels.dto';

@Controller('kpv03_vessel_license_application_inspection_vessels')
export class Kpv03VesselLicenseApplicationInspectionVesselsController {
  constructor(private readonly kpv03vessellicenseapplicationinspectionvesselsservice: Kpv03VesselLicenseApplicationInspectionVesselsService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionVesselsDto: CreateKpv03VesselLicenseApplicationInspectionVesselsDto) {
    return this.kpv03vessellicenseapplicationinspectionvesselsservice.create(createKpv03VesselLicenseApplicationInspectionVesselsDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectionvesselsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionvesselsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectionvesselsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionVesselsDto: UpdateKpv03VesselLicenseApplicationInspectionVesselsDto) {
    return this.kpv03vessellicenseapplicationinspectionvesselsservice.update(id, updateKpv03VesselLicenseApplicationInspectionVesselsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionvesselsservice.remove(id);
  }
}