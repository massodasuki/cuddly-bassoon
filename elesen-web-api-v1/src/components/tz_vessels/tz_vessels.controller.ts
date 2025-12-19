import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzVesselsService } from './tz_vessels.service';
import { CreateTzVesselsDto } from './dto/create-tz_vessels.dto';
import { UpdateTzVesselsDto } from './dto/update-tz_vessels.dto';

@Controller('tz_vessels')
export class TzVesselsController {
  constructor(private readonly tzvesselsservice: TzVesselsService) {}

  @Post()
  create(@Body() createTzVesselsDto: CreateTzVesselsDto) {
    return this.tzvesselsservice.create(createTzVesselsDto);
  }

  @Get()
  findAll() {
    return this.tzvesselsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzvesselsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzvesselsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzVesselsDto: UpdateTzVesselsDto) {
    return this.tzvesselsservice.update(id, updateTzVesselsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzvesselsservice.remove(id);
  }
}