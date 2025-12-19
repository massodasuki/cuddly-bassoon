import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseDirectorsService } from './vessel-license-directors.service';
import { CreateVesselLicenseDirectorsDto } from './dto/create-vessel-license-directors.dto';
import { UpdateVesselLicenseDirectorsDto } from './dto/update-vessel-license-directors.dto';

@Controller('vessel_license_directors')
export class VesselLicenseDirectorsController {
  constructor(private readonly vessellicensedirectorsservice: VesselLicenseDirectorsService) {}

  @Post()
  create(@Body() createVesselLicenseDirectorsDto: CreateVesselLicenseDirectorsDto) {
    return this.vessellicensedirectorsservice.create(createVesselLicenseDirectorsDto);
  }

  @Get()
  findAll() {
    return this.vessellicensedirectorsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicensedirectorsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicensedirectorsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseDirectorsDto: UpdateVesselLicenseDirectorsDto) {
    return this.vessellicensedirectorsservice.update(id, updateVesselLicenseDirectorsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicensedirectorsservice.remove(id);
  }
}