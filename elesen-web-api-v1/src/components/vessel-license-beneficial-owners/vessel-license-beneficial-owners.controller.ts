import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseBeneficialOwnersService } from './vessel-license-beneficial-owners.service';
import { CreateVesselLicenseBeneficialOwnersDto } from './dto/create-vessel-license-beneficial-owners.dto';
import { UpdateVesselLicenseBeneficialOwnersDto } from './dto/update-vessel-license-beneficial-owners.dto';

@Controller('vessel_license_beneficial_owners')
export class VesselLicenseBeneficialOwnersController {
  constructor(private readonly vessellicensebeneficialownersservice: VesselLicenseBeneficialOwnersService) {}

  @Post()
  create(@Body() createVesselLicenseBeneficialOwnersDto: CreateVesselLicenseBeneficialOwnersDto) {
    return this.vessellicensebeneficialownersservice.create(createVesselLicenseBeneficialOwnersDto);
  }

  @Get()
  findAll() {
    return this.vessellicensebeneficialownersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicensebeneficialownersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicensebeneficialownersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseBeneficialOwnersDto: UpdateVesselLicenseBeneficialOwnersDto) {
    return this.vessellicensebeneficialownersservice.update(id, updateVesselLicenseBeneficialOwnersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicensebeneficialownersservice.remove(id);
  }
}