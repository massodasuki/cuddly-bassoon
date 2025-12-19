import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionVoyagesService } from './kpv03-vessel-license-application-inspection-voyages.service';
import { CreateKpv03VesselLicenseApplicationInspectionVoyagesDto } from './dto/create-kpv03-vessel-license-application-inspection-voyages.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionVoyagesDto } from './dto/update-kpv03-vessel-license-application-inspection-voyages.dto';

@Controller('kpv03_vessel_license_application_inspection_voyages')
export class Kpv03VesselLicenseApplicationInspectionVoyagesController {
  constructor(private readonly kpv03vessellicenseapplicationinspectionvoyagesservice: Kpv03VesselLicenseApplicationInspectionVoyagesService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionVoyagesDto: CreateKpv03VesselLicenseApplicationInspectionVoyagesDto) {
    return this.kpv03vessellicenseapplicationinspectionvoyagesservice.create(createKpv03VesselLicenseApplicationInspectionVoyagesDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectionvoyagesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionvoyagesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectionvoyagesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionVoyagesDto: UpdateKpv03VesselLicenseApplicationInspectionVoyagesDto) {
    return this.kpv03vessellicenseapplicationinspectionvoyagesservice.update(id, updateKpv03VesselLicenseApplicationInspectionVoyagesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionvoyagesservice.remove(id);
  }
}