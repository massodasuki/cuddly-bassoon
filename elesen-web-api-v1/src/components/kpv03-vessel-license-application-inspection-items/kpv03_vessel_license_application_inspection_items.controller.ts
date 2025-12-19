import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationInspectionItemsService } from './kpv03_vessel_license_application_inspection_items.service';
import { CreateKpv03VesselLicenseApplicationInspectionItemsDto } from './dto/create-kpv03_vessel_license_application_inspection_items.dto';
import { UpdateKpv03VesselLicenseApplicationInspectionItemsDto } from './dto/update-kpv03_vessel_license_application_inspection_items.dto';

@Controller('kpv03_vessel_license_application_inspection_items')
export class Kpv03VesselLicenseApplicationInspectionItemsController {
  constructor(private readonly kpv03vessellicenseapplicationinspectionitemsservice: Kpv03VesselLicenseApplicationInspectionItemsService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationInspectionItemsDto: CreateKpv03VesselLicenseApplicationInspectionItemsDto) {
    return this.kpv03vessellicenseapplicationinspectionitemsservice.create(createKpv03VesselLicenseApplicationInspectionItemsDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationinspectionitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationinspectionitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationInspectionItemsDto: UpdateKpv03VesselLicenseApplicationInspectionItemsDto) {
    return this.kpv03vessellicenseapplicationinspectionitemsservice.update(id, updateKpv03VesselLicenseApplicationInspectionItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationinspectionitemsservice.remove(id);
  }
}