import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInformationService } from './kpv03_vessel_license_application_information.service';
import { CreateKpv03VesselLicenseApplicationInformationDto } from './dto/create-kpv03_vessel_license_application_information.dto';
import { UpdateKpv03VesselLicenseApplicationInformationDto } from './dto/update-kpv03_vessel_license_application_information.dto';

@Controller('kpv03_vessel_license_application_information')
export class Kpv03VesselLicenseApplicationInformationController {
  constructor(private readonly kpv03vessellicenseapplicationinformationservice: Kpv03VesselLicenseApplicationInformationService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInformationDto: CreateKpv03VesselLicenseApplicationInformationDto) {
    return this.kpv03vessellicenseapplicationinformationservice.create(createKpv03VesselLicenseApplicationInformationDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinformationservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinformationservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinformationservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInformationDto: UpdateKpv03VesselLicenseApplicationInformationDto) {
    return this.kpv03vessellicenseapplicationinformationservice.update(id, updateKpv03VesselLicenseApplicationInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinformationservice.remove(id);
  }
}