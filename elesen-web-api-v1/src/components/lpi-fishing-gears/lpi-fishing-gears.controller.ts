import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiFishingGearsService } from './lpi-fishing-gears.service';
import { CreateLpiFishingGearsDto } from './dto/create-lpi-fishing-gears.dto';
import { UpdateLpiFishingGearsDto } from './dto/update-lpi-fishing-gears.dto';

@Controller('lpi_fishing_gears')
export class LpiFishingGearsController {
  constructor(private readonly lpifishinggearsservice: LpiFishingGearsService) {}

  @Post()
  create(@Body() createLpiFishingGearsDto: CreateLpiFishingGearsDto) {
    return this.lpifishinggearsservice.create(createLpiFishingGearsDto);
  }

  @Get()
  findAll() {
    return this.lpifishinggearsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpifishinggearsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpifishinggearsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiFishingGearsDto: UpdateLpiFishingGearsDto) {
    return this.lpifishinggearsservice.update(id, updateLpiFishingGearsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpifishinggearsservice.remove(id);
  }
}