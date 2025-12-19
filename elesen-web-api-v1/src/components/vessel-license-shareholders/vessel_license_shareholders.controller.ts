import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VesselLicenseShareholdersService } from './vessel_license_shareholders.service';
import { CreateVesselLicenseShareholdersDto } from './dto/create-vessel_license_shareholders.dto';
import { UpdateVesselLicenseShareholdersDto } from './dto/update-vessel_license_shareholders.dto';

@Controller('vessel_license_shareholders')
export class VesselLicenseShareholdersController {
  constructor(private readonly vessellicenseshareholdersservice: VesselLicenseShareholdersService) {}

  @Post()
  create(@Body() createVesselLicenseShareholdersDto: CreateVesselLicenseShareholdersDto) {
    return this.vessellicenseshareholdersservice.create(createVesselLicenseShareholdersDto);
  }

  @Get()
  findAll() {
    return this.vessellicenseshareholdersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vessellicenseshareholdersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.vessellicenseshareholdersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVesselLicenseShareholdersDto: UpdateVesselLicenseShareholdersDto) {
    return this.vessellicenseshareholdersservice.update(id, updateVesselLicenseShareholdersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vessellicenseshareholdersservice.remove(id);
  }
}