import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionDetailsService } from './kpv03-vessel-license-application-inspection-details.service';
import { CreateKpv03VesselLicenseApplicationInspectionDetailsDto } from './dto/create-kpv03-vessel-license-application-inspection-details.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionDetailsDto } from './dto/update-kpv03-vessel-license-application-inspection-details.dto';

@Controller('kpv03_vessel_license_application_inspection_details')
export class Kpv03VesselLicenseApplicationInspectionDetailsController {
  constructor(private readonly kpv03vessellicenseapplicationinspectiondetailsservice: Kpv03VesselLicenseApplicationInspectionDetailsService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionDetailsDto: CreateKpv03VesselLicenseApplicationInspectionDetailsDto) {
    return this.kpv03vessellicenseapplicationinspectiondetailsservice.create(createKpv03VesselLicenseApplicationInspectionDetailsDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectiondetailsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectiondetailsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectiondetailsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionDetailsDto: UpdateKpv03VesselLicenseApplicationInspectionDetailsDto) {
    return this.kpv03vessellicenseapplicationinspectiondetailsservice.update(id, updateKpv03VesselLicenseApplicationInspectionDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectiondetailsservice.remove(id);
  }
}