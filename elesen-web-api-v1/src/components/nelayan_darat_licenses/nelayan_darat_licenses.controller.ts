import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NelayanDaratLicensesService } from './nelayan_darat_licenses.service';
import { CreateNelayanDaratLicensesDto } from './dto/create-nelayan_darat_licenses.dto';
import { UpdateNelayanDaratLicensesDto } from './dto/update-nelayan_darat_licenses.dto';

@Controller('nelayan_darat_licenses')
export class NelayanDaratLicensesController {
  constructor(private readonly nelayandaratlicensesservice: NelayanDaratLicensesService) {}

  @Post()
  create(@Body() createNelayanDaratLicensesDto: CreateNelayanDaratLicensesDto) {
    return this.nelayandaratlicensesservice.create(createNelayanDaratLicensesDto);
  }

  @Get()
  findAll() {
    return this.nelayandaratlicensesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nelayandaratlicensesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.nelayandaratlicensesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNelayanDaratLicensesDto: UpdateNelayanDaratLicensesDto) {
    return this.nelayandaratlicensesservice.update(id, updateNelayanDaratLicensesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nelayandaratlicensesservice.remove(id);
  }
}