import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Kpv03VesselLicenseApplicationBenificialOwnersService } from './kpv03-vessel-license-application-benificial-owners.service';
import { CreateKpv03VesselLicenseApplicationBenificialOwnersDto } from './dto/create-kpv03-vessel-license-application-benificial-owners.dto';
import { UpdateKpv03VesselLicenseApplicationBenificialOwnersDto } from './dto/update-kpv03-vessel-license-application-benificial-owners.dto';

@Controller('kpv03_vessel_license_application_benificial_owners')
export class Kpv03VesselLicenseApplicationBenificialOwnersController {
  constructor(private readonly kpv03vessellicenseapplicationbenificialownersservice: Kpv03VesselLicenseApplicationBenificialOwnersService) {}

  @Post()
  create(@Body() createKpv03VesselLicenseApplicationBenificialOwnersDto: CreateKpv03VesselLicenseApplicationBenificialOwnersDto) {
    return this.kpv03vessellicenseapplicationbenificialownersservice.create(createKpv03VesselLicenseApplicationBenificialOwnersDto);
  }

  @Get()
  findAll() {
    return this.kpv03vessellicenseapplicationbenificialownersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationbenificialownersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.kpv03vessellicenseapplicationbenificialownersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKpv03VesselLicenseApplicationBenificialOwnersDto: UpdateKpv03VesselLicenseApplicationBenificialOwnersDto) {
    return this.kpv03vessellicenseapplicationbenificialownersservice.update(id, updateKpv03VesselLicenseApplicationBenificialOwnersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kpv03vessellicenseapplicationbenificialownersservice.remove(id);
  }
}