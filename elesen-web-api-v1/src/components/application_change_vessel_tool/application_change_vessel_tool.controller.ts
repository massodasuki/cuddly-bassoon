import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationChangeVesselToolService } from './application_change_vessel_tool.service';
import { CreateApplicationChangeVesselToolDto } from './dto/create-application_change_vessel_tool.dto';
import { UpdateApplicationChangeVesselToolDto } from './dto/update-application_change_vessel_tool.dto';

@Controller('application_change_vessel_tool')
export class ApplicationChangeVesselToolController {
  constructor(private readonly applicationchangevesseltoolservice: ApplicationChangeVesselToolService) {}

  @Post()
  create(@Body() createApplicationChangeVesselToolDto: CreateApplicationChangeVesselToolDto) {
    return this.applicationchangevesseltoolservice.create(createApplicationChangeVesselToolDto);
  }

  @Get()
  findAll() {
    return this.applicationchangevesseltoolservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationchangevesseltoolservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationchangevesseltoolservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationChangeVesselToolDto: UpdateApplicationChangeVesselToolDto) {
    return this.applicationchangevesseltoolservice.update(id, updateApplicationChangeVesselToolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationchangevesseltoolservice.remove(id);
  }
}