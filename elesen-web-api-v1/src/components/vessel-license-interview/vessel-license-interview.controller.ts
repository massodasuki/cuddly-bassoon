import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseInterviewService } from './vessel-license-interview.service';
import { CreateVesselLicenseInterviewDto } from './dto/create-vessel-license-interview.dto';
import { UpdateVesselLicenseInterviewDto } from './dto/update-vessel-license-interview.dto';

@Controller('vessel_license_interview')
export class VesselLicenseInterviewController {
  constructor(private readonly vessellicenseinterviewservice: VesselLicenseInterviewService) {}

  @Post()
  create(@Body() createVesselLicenseInterviewDto: CreateVesselLicenseInterviewDto) {
    return this.vessellicenseinterviewservice.create(createVesselLicenseInterviewDto);
  }

  @Get()
  findAll() {
    return this.vessellicenseinterviewservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicenseinterviewservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicenseinterviewservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseInterviewDto: UpdateVesselLicenseInterviewDto) {
    return this.vessellicenseinterviewservice.update(id, updateVesselLicenseInterviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicenseinterviewservice.remove(id);
  }
}