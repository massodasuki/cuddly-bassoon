import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bInspectionReportTwoService } from './ppv04b_inspection_report_two.service';
import { CreatePpv04bInspectionReportTwoDto } from './dto/create-ppv04b_inspection_report_two.dto';
import { UpdatePpv04bInspectionReportTwoDto } from './dto/update-ppv04b_inspection_report_two.dto';

@Controller('ppv04b_inspection_report_two')
export class Ppv04bInspectionReportTwoController {
  constructor(private readonly ppv04binspectionreporttwoservice: Ppv04bInspectionReportTwoService) {}

  @Post()
  create(@Body() createPpv04bInspectionReportTwoDto: CreatePpv04bInspectionReportTwoDto) {
    return this.ppv04binspectionreporttwoservice.create(createPpv04bInspectionReportTwoDto);
  }

  @Get()
  findAll() {
    return this.ppv04binspectionreporttwoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04binspectionreporttwoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04binspectionreporttwoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bInspectionReportTwoDto: UpdatePpv04bInspectionReportTwoDto) {
    return this.ppv04binspectionreporttwoservice.update(id, updatePpv04bInspectionReportTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04binspectionreporttwoservice.remove(id);
  }
}