import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bInspectionReportOneService } from './ppv04b-inspection-report-one.service';
import { CreatePpv04bInspectionReportOneDto } from './dto/create-ppv04b-inspection-report-one.dto';
import { UpdatePpv04bInspectionReportOneDto } from './dto/update-ppv04b-inspection-report-one.dto';

@Controller('ppv04b_inspection_report_one')
export class Ppv04bInspectionReportOneController {
  constructor(private readonly ppv04binspectionreportoneservice: Ppv04bInspectionReportOneService) {}

  @Post()
  create(@Body() createPpv04bInspectionReportOneDto: CreatePpv04bInspectionReportOneDto) {
    return this.ppv04binspectionreportoneservice.create(createPpv04bInspectionReportOneDto);
  }

  @Get()
  findAll() {
    return this.ppv04binspectionreportoneservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04binspectionreportoneservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04binspectionreportoneservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bInspectionReportOneDto: UpdatePpv04bInspectionReportOneDto) {
    return this.ppv04binspectionreportoneservice.update(id, updatePpv04bInspectionReportOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04binspectionreportoneservice.remove(id);
  }
}