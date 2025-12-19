import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationLicensePrintLogsService } from './application-license-print-logs.service';
import { CreateApplicationLicensePrintLogsDto } from './dto/create-application-license-print-logs.dto';
import { UpdateApplicationLicensePrintLogsDto } from './dto/update-application-license-print-logs.dto';

@Controller('application_license_print_logs')
export class ApplicationLicensePrintLogsController {
  constructor(private readonly applicationlicenseprintlogsservice: ApplicationLicensePrintLogsService) {}

  @Post()
  create(@Body() createApplicationLicensePrintLogsDto: CreateApplicationLicensePrintLogsDto) {
    return this.applicationlicenseprintlogsservice.create(createApplicationLicensePrintLogsDto);
  }

  @Get()
  findAll() {
    return this.applicationlicenseprintlogsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationlicenseprintlogsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationlicenseprintlogsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationLicensePrintLogsDto: UpdateApplicationLicensePrintLogsDto) {
    return this.applicationlicenseprintlogsservice.update(id, updateApplicationLicensePrintLogsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationlicenseprintlogsservice.remove(id);
  }
}