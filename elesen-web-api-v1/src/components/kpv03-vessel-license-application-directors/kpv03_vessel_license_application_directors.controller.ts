import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationDirectorsService } from './kpv03_vessel_license_application_directors.service';
import { CreateKpv03VesselLicenseApplicationDirectorsDto } from './dto/create-kpv03_vessel_license_application_directors.dto';
import { UpdateKpv03VesselLicenseApplicationDirectorsDto } from './dto/update-kpv03_vessel_license_application_directors.dto';

@Controller('kpv03_vessel_license_application_directors')
export class Kpv03VesselLicenseApplicationDirectorsController {
  constructor(private readonly kpv03vessellicenseapplicationdirectorsservice: Kpv03VesselLicenseApplicationDirectorsService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationDirectorsDto: CreateKpv03VesselLicenseApplicationDirectorsDto) {
    return this.kpv03vessellicenseapplicationdirectorsservice.create(createKpv03VesselLicenseApplicationDirectorsDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationdirectorsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationdirectorsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationdirectorsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationDirectorsDto: UpdateKpv03VesselLicenseApplicationDirectorsDto) {
    return this.kpv03vessellicenseapplicationdirectorsservice.update(id, updateKpv03VesselLicenseApplicationDirectorsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationdirectorsservice.remove(id);
  }
}