import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LpiEnginesService } from './lpi_engines.service';
import { CreateLpiEnginesDto } from './dto/create-lpi_engines.dto';
import { UpdateLpiEnginesDto } from './dto/update-lpi_engines.dto';

@Controller('lpi_engines')
export class LpiEnginesController {
  constructor(private readonly lpienginesservice: LpiEnginesService) {}

  @Post()
  create(@Body() createLpiEnginesDto: CreateLpiEnginesDto) {
    return this.lpienginesservice.create(createLpiEnginesDto);
  }

  @Get()
  findAll() {
    return this.lpienginesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lpienginesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.lpienginesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLpiEnginesDto: UpdateLpiEnginesDto) {
    return this.lpienginesservice.update(id, updateLpiEnginesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lpienginesservice.remove(id);
  }
}