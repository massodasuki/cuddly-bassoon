import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanInspectionsService } from './tz-permohonan-inspections.service';
import { CreateTzPermohonanInspectionsDto } from './dto/create-tz-permohonan-inspections.dto';
import { UpdateTzPermohonanInspectionsDto } from './dto/update-tz-permohonan-inspections.dto';

@Controller('tz_permohonan_inspections')
export class TzPermohonanInspectionsController {
  constructor(private readonly tzpermohonaninspectionsservice: TzPermohonanInspectionsService) {}

  @Post()
  create(@Body() createTzPermohonanInspectionsDto: CreateTzPermohonanInspectionsDto) {
    return this.tzpermohonaninspectionsservice.create(createTzPermohonanInspectionsDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonaninspectionsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonaninspectionsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonaninspectionsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanInspectionsDto: UpdateTzPermohonanInspectionsDto) {
    return this.tzpermohonaninspectionsservice.update(id, updateTzPermohonanInspectionsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonaninspectionsservice.remove(id);
  }
}