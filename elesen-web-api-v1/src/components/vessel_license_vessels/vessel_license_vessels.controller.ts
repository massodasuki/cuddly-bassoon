import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseVesselsService } from './vessel_license_vessels.service';
import { CreateVesselLicenseVesselsDto } from './dto/create-vessel_license_vessels.dto';
import { UpdateVesselLicenseVesselsDto } from './dto/update-vessel_license_vessels.dto';

@Controller('vessel_license_vessels')
export class VesselLicenseVesselsController {
  constructor(private readonly vessellicensevesselsservice: VesselLicenseVesselsService) {}

  @Post()
  create(@Body() createVesselLicenseVesselsDto: CreateVesselLicenseVesselsDto) {
    return this.vessellicensevesselsservice.create(createVesselLicenseVesselsDto);
  }

  @Get()
  findAll() {
    return this.vessellicensevesselsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicensevesselsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicensevesselsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseVesselsDto: UpdateVesselLicenseVesselsDto) {
    return this.vessellicensevesselsservice.update(id, updateVesselLicenseVesselsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicensevesselsservice.remove(id);
  }
}