import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationHistoriesService } from './kpv03_vessel_license_application_histories.service';
import { CreateKpv03VesselLicenseApplicationHistoriesDto } from './dto/create-kpv03_vessel_license_application_histories.dto';
import { UpdateKpv03VesselLicenseApplicationHistoriesDto } from './dto/update-kpv03_vessel_license_application_histories.dto';

@Controller('kpv03_vessel_license_application_histories')
export class Kpv03VesselLicenseApplicationHistoriesController {
  constructor(private readonly kpv03vessellicenseapplicationhistoriesservice: Kpv03VesselLicenseApplicationHistoriesService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationHistoriesDto: CreateKpv03VesselLicenseApplicationHistoriesDto) {
    return this.kpv03vessellicenseapplicationhistoriesservice.create(createKpv03VesselLicenseApplicationHistoriesDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationhistoriesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationhistoriesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationhistoriesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationHistoriesDto: UpdateKpv03VesselLicenseApplicationHistoriesDto) {
    return this.kpv03vessellicenseapplicationhistoriesservice.update(id, updateKpv03VesselLicenseApplicationHistoriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationhistoriesservice.remove(id);
  }
}