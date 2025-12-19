import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationShareholdersService } from './kpv03_vessel_license_application_shareholders.service';
import { CreateKpv03VesselLicenseApplicationShareholdersDto } from './dto/create-kpv03_vessel_license_application_shareholders.dto';
import { UpdateKpv03VesselLicenseApplicationShareholdersDto } from './dto/update-kpv03_vessel_license_application_shareholders.dto';

@Controller('kpv03_vessel_license_application_shareholders')
export class Kpv03VesselLicenseApplicationShareholdersController {
  constructor(private readonly kpv03vessellicenseapplicationshareholdersservice: Kpv03VesselLicenseApplicationShareholdersService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationShareholdersDto: CreateKpv03VesselLicenseApplicationShareholdersDto) {
    return this.kpv03vessellicenseapplicationshareholdersservice.create(createKpv03VesselLicenseApplicationShareholdersDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationshareholdersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationshareholdersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationshareholdersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationShareholdersDto: UpdateKpv03VesselLicenseApplicationShareholdersDto) {
    return this.kpv03vessellicenseapplicationshareholdersservice.update(id, updateKpv03VesselLicenseApplicationShareholdersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationshareholdersservice.remove(id);
  }
}