import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bHobReportTwoService } from './ppv04b_hob_report_two.service';
import { CreatePpv04bHobReportTwoDto } from './dto/create-ppv04b_hob_report_two.dto';
import { UpdatePpv04bHobReportTwoDto } from './dto/update-ppv04b_hob_report_two.dto';

@Controller('ppv04b_hob_report_two')
export class Ppv04bHobReportTwoController {
  constructor(private readonly ppv04bhobreporttwoservice: Ppv04bHobReportTwoService) {}

  @Post()
  create(@Body() createPpv04bHobReportTwoDto: CreatePpv04bHobReportTwoDto) {
    return this.ppv04bhobreporttwoservice.create(createPpv04bHobReportTwoDto);
  }

  @Get()
  findAll() {
    return this.ppv04bhobreporttwoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bhobreporttwoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bhobreporttwoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bHobReportTwoDto: UpdatePpv04bHobReportTwoDto) {
    return this.ppv04bhobreporttwoservice.update(id, updatePpv04bHobReportTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bhobreporttwoservice.remove(id);
  }
}