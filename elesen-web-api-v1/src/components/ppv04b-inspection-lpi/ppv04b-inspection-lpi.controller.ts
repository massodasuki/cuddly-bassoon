import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bInspectionLpiService } from './ppv04b-inspection-lpi.service';
import { CreatePpv04bInspectionLpiDto } from './dto/create-ppv04b-inspection-lpi.dto';
import { UpdatePpv04bInspectionLpiDto } from './dto/update-ppv04b-inspection-lpi.dto';

@Controller('ppv04b_inspection_lpi')
export class Ppv04bInspectionLpiController {
  constructor(private readonly ppv04binspectionlpiservice: Ppv04bInspectionLpiService) {}

  @Post()
  create(@Body() createPpv04bInspectionLpiDto: CreatePpv04bInspectionLpiDto) {
    return this.ppv04binspectionlpiservice.create(createPpv04bInspectionLpiDto);
  }

  @Get()
  findAll() {
    return this.ppv04binspectionlpiservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04binspectionlpiservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04binspectionlpiservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bInspectionLpiDto: UpdatePpv04bInspectionLpiDto) {
    return this.ppv04binspectionlpiservice.update(id, updatePpv04bInspectionLpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04binspectionlpiservice.remove(id);
  }
}