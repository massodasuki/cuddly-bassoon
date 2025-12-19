import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationPinsService } from './application_pins.service';
import { CreateApplicationPinsDto } from './dto/create-application_pins.dto';
import { UpdateApplicationPinsDto } from './dto/update-application_pins.dto';

@Controller('application_pins')
export class ApplicationPinsController {
  constructor(private readonly applicationpinsservice: ApplicationPinsService) {}

  @Post()
  create(@Body() createApplicationPinsDto: CreateApplicationPinsDto) {
    return this.applicationpinsservice.create(createApplicationPinsDto);
  }

  @Get()
  findAll() {
    return this.applicationpinsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationpinsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationpinsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationPinsDto: UpdateApplicationPinsDto) {
    return this.applicationpinsservice.update(id, updateApplicationPinsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationpinsservice.remove(id);
  }
}