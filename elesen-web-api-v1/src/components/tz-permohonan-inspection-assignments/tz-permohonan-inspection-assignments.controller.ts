import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanInspectionAssignmentsService } from './tz-permohonan-inspection-assignments.service';
import { CreateTzPermohonanInspectionAssignmentsDto } from './dto/create-tz-permohonan-inspection-assignments.dto';
import { UpdateTzPermohonanInspectionAssignmentsDto } from './dto/update-tz-permohonan-inspection-assignments.dto';

@Controller('tz_permohonan_inspection_assignments')
export class TzPermohonanInspectionAssignmentsController {
  constructor(private readonly tzpermohonaninspectionassignmentsservice: TzPermohonanInspectionAssignmentsService) {}

  @Post()
  create(@Body() createTzPermohonanInspectionAssignmentsDto: CreateTzPermohonanInspectionAssignmentsDto) {
    return this.tzpermohonaninspectionassignmentsservice.create(createTzPermohonanInspectionAssignmentsDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonaninspectionassignmentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonaninspectionassignmentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonaninspectionassignmentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanInspectionAssignmentsDto: UpdateTzPermohonanInspectionAssignmentsDto) {
    return this.tzpermohonaninspectionassignmentsservice.update(id, updateTzPermohonanInspectionAssignmentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonaninspectionassignmentsservice.remove(id);
  }
}