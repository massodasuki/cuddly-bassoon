import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bPrintLicenseGrantService } from './ppv04b-print-license-grant.service';
import { CreatePpv04bPrintLicenseGrantDto } from './dto/create-ppv04b-print-license-grant.dto';
import { UpdatePpv04bPrintLicenseGrantDto } from './dto/update-ppv04b-print-license-grant.dto';

@Controller('ppv04b_print_license_grant')
export class Ppv04bPrintLicenseGrantController {
  constructor(private readonly ppv04bprintlicensegrantservice: Ppv04bPrintLicenseGrantService) {}

  @Post()
  create(@Body() createPpv04bPrintLicenseGrantDto: CreatePpv04bPrintLicenseGrantDto) {
    return this.ppv04bprintlicensegrantservice.create(createPpv04bPrintLicenseGrantDto);
  }

  @Get()
  findAll() {
    return this.ppv04bprintlicensegrantservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bprintlicensegrantservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bprintlicensegrantservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bPrintLicenseGrantDto: UpdatePpv04bPrintLicenseGrantDto) {
    return this.ppv04bprintlicensegrantservice.update(id, updatePpv04bPrintLicenseGrantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bprintlicensegrantservice.remove(id);
  }
}