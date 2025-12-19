import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiInspectionItemsService } from './lpi-inspection-items.service';
import { CreateLpiInspectionItemsDto } from './dto/create-lpi-inspection-items.dto';
import { UpdateLpiInspectionItemsDto } from './dto/update-lpi-inspection-items.dto';

@Controller('lpi_inspection_items')
export class LpiInspectionItemsController {
  constructor(private readonly lpiinspectionitemsservice: LpiInspectionItemsService) {}

  @Post()
  create(@Body() createLpiInspectionItemsDto: CreateLpiInspectionItemsDto) {
    return this.lpiinspectionitemsservice.create(createLpiInspectionItemsDto);
  }

  @Get()
  findAll() {
    return this.lpiinspectionitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpiinspectionitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpiinspectionitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiInspectionItemsDto: UpdateLpiInspectionItemsDto) {
    return this.lpiinspectionitemsservice.update(id, updateLpiInspectionItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpiinspectionitemsservice.remove(id);
  }
}