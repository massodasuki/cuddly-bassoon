import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationFinancesService } from './kpv03-vessel-license-application-finances.service';
import { CreateKpv03VesselLicenseApplicationFinancesDto } from './dto/create-kpv03-vessel-license-application-finances.dto';
import { UpdateKpv03VesselLicenseApplicationFinancesDto } from './dto/update-kpv03-vessel-license-application-finances.dto';

@Controller('kpv03_vessel_license_application_finances')
export class Kpv03VesselLicenseApplicationFinancesController {
  constructor(private readonly kpv03vessellicenseapplicationfinancesservice: Kpv03VesselLicenseApplicationFinancesService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationFinancesDto: CreateKpv03VesselLicenseApplicationFinancesDto) {
    return this.kpv03vessellicenseapplicationfinancesservice.create(createKpv03VesselLicenseApplicationFinancesDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationfinancesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationfinancesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationfinancesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationFinancesDto: UpdateKpv03VesselLicenseApplicationFinancesDto) {
    return this.kpv03vessellicenseapplicationfinancesservice.update(id, updateKpv03VesselLicenseApplicationFinancesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationfinancesservice.remove(id);
  }
}