import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiInspectionDetailsService } from './lpi-inspection-details.service';
import { CreateLpiInspectionDetailsDto } from './dto/create-lpi-inspection-details.dto';
import { UpdateLpiInspectionDetailsDto } from './dto/update-lpi-inspection-details.dto';

@Controller('lpi_inspection_details')
export class LpiInspectionDetailsController {
  constructor(private readonly lpiinspectiondetailsservice: LpiInspectionDetailsService) {}

  @Post()
  create(@Body() createLpiInspectionDetailsDto: CreateLpiInspectionDetailsDto) {
    return this.lpiinspectiondetailsservice.create(createLpiInspectionDetailsDto);
  }

  @Get()
  findAll() {
    return this.lpiinspectiondetailsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiinspectiondetailsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiinspectiondetailsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiInspectionDetailsDto: UpdateLpiInspectionDetailsDto) {
    return this.lpiinspectiondetailsservice.update(id, updateLpiInspectionDetailsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiinspectiondetailsservice.remove(id);
  }
}