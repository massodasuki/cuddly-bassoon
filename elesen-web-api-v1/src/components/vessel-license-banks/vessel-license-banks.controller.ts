import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseBanksService } from './vessel-license-banks.service';
import { CreateVesselLicenseBanksDto } from './dto/create-vessel-license-banks.dto';
import { UpdateVesselLicenseBanksDto } from './dto/update-vessel-license-banks.dto';

@Controller('vessel_license_banks')
export class VesselLicenseBanksController {
  constructor(private readonly vessellicensebanksservice: VesselLicenseBanksService) {}

  @Post()
  create(@Body() createVesselLicenseBanksDto: CreateVesselLicenseBanksDto) {
    return this.vessellicensebanksservice.create(createVesselLicenseBanksDto);
  }

  @Get()
  findAll() {
    return this.vessellicensebanksservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicensebanksservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicensebanksservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseBanksDto: UpdateVesselLicenseBanksDto) {
    return this.vessellicensebanksservice.update(id, updateVesselLicenseBanksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicensebanksservice.remove(id);
  }
}