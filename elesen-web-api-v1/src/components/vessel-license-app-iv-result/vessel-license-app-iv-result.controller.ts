import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseAppIvResultService } from './vessel-license-app-iv-result.service';
import { CreateVesselLicenseAppIvResultDto } from './dto/create-vessel-license-app-iv-result.dto';
import { UpdateVesselLicenseAppIvResultDto } from './dto/update-vessel-license-app-iv-result.dto';

@Controller('vessel_license_app_iv_result')
export class VesselLicenseAppIvResultController {
  constructor(private readonly vessellicenseappivresultservice: VesselLicenseAppIvResultService) {}

  @Post()
  create(@Body() createVesselLicenseAppIvResultDto: CreateVesselLicenseAppIvResultDto) {
    return this.vessellicenseappivresultservice.create(createVesselLicenseAppIvResultDto);
  }

  @Get()
  findAll() {
    return this.vessellicenseappivresultservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicenseappivresultservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicenseappivresultservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseAppIvResultDto: UpdateVesselLicenseAppIvResultDto) {
    return this.vessellicenseappivresultservice.update(id, updateVesselLicenseAppIvResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicenseappivresultservice.remove(id);
  }
}