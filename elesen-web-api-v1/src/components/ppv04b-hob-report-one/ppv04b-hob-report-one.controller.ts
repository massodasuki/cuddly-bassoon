import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bHobReportOneService } from './ppv04b-hob-report-one.service';
import { CreatePpv04bHobReportOneDto } from './dto/create-ppv04b-hob-report-one.dto';
import { UpdatePpv04bHobReportOneDto } from './dto/update-ppv04b-hob-report-one.dto';

@Controller('ppv04b_hob_report_one')
export class Ppv04bHobReportOneController {
  constructor(private readonly ppv04bhobreportoneservice: Ppv04bHobReportOneService) {}

  @Post()
  create(@Body() createPpv04bHobReportOneDto: CreatePpv04bHobReportOneDto) {
    return this.ppv04bhobreportoneservice.create(createPpv04bHobReportOneDto);
  }

  @Get()
  findAll() {
    return this.ppv04bhobreportoneservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bhobreportoneservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bhobreportoneservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bHobReportOneDto: UpdatePpv04bHobReportOneDto) {
    return this.ppv04bhobreportoneservice.update(id, updatePpv04bHobReportOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bhobreportoneservice.remove(id);
  }
}