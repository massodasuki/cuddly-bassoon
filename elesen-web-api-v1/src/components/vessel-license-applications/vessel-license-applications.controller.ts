import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseApplicationsService } from './vessel-license-applications.service';
import { CreateVesselLicenseApplicationsDto } from './dto/create-vessel-license-applications.dto';
import { UpdateVesselLicenseApplicationsDto } from './dto/update-vessel-license-applications.dto';

@Controller('vessel_license_applications')
export class VesselLicenseApplicationsController {
  constructor(private readonly vessellicenseapplicationsservice: VesselLicenseApplicationsService) {}

  @Post()
  create(@Body() createVesselLicenseApplicationsDto: CreateVesselLicenseApplicationsDto) {
    return this.vessellicenseapplicationsservice.create(createVesselLicenseApplicationsDto);
  }

  @Get()
  findAll() {
    return this.vessellicenseapplicationsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicenseapplicationsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicenseapplicationsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseApplicationsDto: UpdateVesselLicenseApplicationsDto) {
    return this.vessellicenseapplicationsservice.update(id, updateVesselLicenseApplicationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicenseapplicationsservice.remove(id);
  }
}