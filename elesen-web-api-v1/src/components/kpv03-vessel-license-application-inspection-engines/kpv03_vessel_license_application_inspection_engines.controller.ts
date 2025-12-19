import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionEnginesService } from './kpv03_vessel_license_application_inspection_engines.service';
import { CreateKpv03VesselLicenseApplicationInspectionEnginesDto } from './dto/create-kpv03_vessel_license_application_inspection_engines.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionEnginesDto } from './dto/update-kpv03_vessel_license_application_inspection_engines.dto';

@Controller('kpv03_vessel_license_application_inspection_engines')
export class Kpv03VesselLicenseApplicationInspectionEnginesController {
  constructor(private readonly kpv03vessellicenseapplicationinspectionenginesservice: Kpv03VesselLicenseApplicationInspectionEnginesService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionEnginesDto: CreateKpv03VesselLicenseApplicationInspectionEnginesDto) {
    return this.kpv03vessellicenseapplicationinspectionenginesservice.create(createKpv03VesselLicenseApplicationInspectionEnginesDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectionenginesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionenginesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectionenginesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionEnginesDto: UpdateKpv03VesselLicenseApplicationInspectionEnginesDto) {
    return this.kpv03vessellicenseapplicationinspectionenginesservice.update(id, updateKpv03VesselLicenseApplicationInspectionEnginesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionenginesservice.remove(id);
  }
}