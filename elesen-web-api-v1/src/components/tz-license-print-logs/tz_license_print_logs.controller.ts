import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzLicensePrintLogsService } from './tz_license_print_logs.service';
import { CreateTzLicensePrintLogsDto } from './dto/create-tz_license_print_logs.dto';
import { UpdateTzLicensePrintLogsDto } from './dto/update-tz_license_print_logs.dto';

@Controller('tz_license_print_logs')
export class TzLicensePrintLogsController {
  constructor(private readonly tzlicenseprintlogsservice: TzLicensePrintLogsService) {}

  @Post()
  create(@Body() createTzLicensePrintLogsDto: CreateTzLicensePrintLogsDto) {
    return this.tzlicenseprintlogsservice.create(createTzLicensePrintLogsDto);
  }

  @Get()
  findAll() {
    return this.tzlicenseprintlogsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzlicenseprintlogsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzlicenseprintlogsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzLicensePrintLogsDto: UpdateTzLicensePrintLogsDto) {
    return this.tzlicenseprintlogsservice.update(id, updateTzLicensePrintLogsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzlicenseprintlogsservice.remove(id);
  }
}