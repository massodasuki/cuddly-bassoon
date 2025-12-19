import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiInspectionsService } from './lpi_inspections.service';
import { CreateLpiInspectionsDto } from './dto/create-lpi_inspections.dto';
import { UpdateLpiInspectionsDto } from './dto/update-lpi_inspections.dto';

@Controller('lpi_inspections')
export class LpiInspectionsController {
  constructor(private readonly lpiinspectionsservice: LpiInspectionsService) {}

  @Post()
  create(@Body() createLpiInspectionsDto: CreateLpiInspectionsDto) {
    return this.lpiinspectionsservice.create(createLpiInspectionsDto);
  }

  @Get()
  findAll() {
    return this.lpiinspectionsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiinspectionsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiinspectionsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiInspectionsDto: UpdateLpiInspectionsDto) {
    return this.lpiinspectionsservice.update(id, updateLpiInspectionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiinspectionsservice.remove(id);
  }
}