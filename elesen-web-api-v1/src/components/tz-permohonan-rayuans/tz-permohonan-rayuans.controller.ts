import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanRayuansService } from './tz-permohonan-rayuans.service';
import { CreateTzPermohonanRayuansDto } from './dto/create-tz-permohonan-rayuans.dto';
import { UpdateTzPermohonanRayuansDto } from './dto/update-tz-permohonan-rayuans.dto';

@Controller('tz_permohonan_rayuans')
export class TzPermohonanRayuansController {
  constructor(private readonly tzpermohonanrayuansservice: TzPermohonanRayuansService) {}

  @Post()
  create(@Body() createTzPermohonanRayuansDto: CreateTzPermohonanRayuansDto) {
    return this.tzpermohonanrayuansservice.create(createTzPermohonanRayuansDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonanrayuansservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonanrayuansservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonanrayuansservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanRayuansDto: UpdateTzPermohonanRayuansDto) {
    return this.tzpermohonanrayuansservice.update(id, updateTzPermohonanRayuansDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonanrayuansservice.remove(id);
  }
}