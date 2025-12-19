import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseApplicationTrailsService } from './vessel_license_application_trails.service';
import { CreateVesselLicenseApplicationTrailsDto } from './dto/create-vessel_license_application_trails.dto';
import { UpdateVesselLicenseApplicationTrailsDto } from './dto/update-vessel_license_application_trails.dto';

@Controller('vessel_license_application_trails')
export class VesselLicenseApplicationTrailsController {
  constructor(private readonly vessellicenseapplicationtrailsservice: VesselLicenseApplicationTrailsService) {}

  @Post()
  create(@Body() createVesselLicenseApplicationTrailsDto: CreateVesselLicenseApplicationTrailsDto) {
    return this.vessellicenseapplicationtrailsservice.create(createVesselLicenseApplicationTrailsDto);
  }

  @Get()
  findAll() {
    return this.vessellicenseapplicationtrailsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicenseapplicationtrailsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicenseapplicationtrailsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseApplicationTrailsDto: UpdateVesselLicenseApplicationTrailsDto) {
    return this.vessellicenseapplicationtrailsservice.update(id, updateVesselLicenseApplicationTrailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicenseapplicationtrailsservice.remove(id);
  }
}