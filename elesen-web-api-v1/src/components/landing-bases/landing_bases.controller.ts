import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LandingBasesService } from './landing_bases.service';
import { CreateLandingBasesDto } from './dto/create-landing_bases.dto';
import { UpdateLandingBasesDto } from './dto/update-landing_bases.dto';

@Controller('landing_bases')
export class LandingBasesController {
  constructor(private readonly landingbasesservice: LandingBasesService) {}

  @Post()
  create(@Body() createLandingBasesDto: CreateLandingBasesDto) {
    return this.landingbasesservice.create(createLandingBasesDto);
  }

  @Get()
  findAll() {
    return this.landingbasesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landingbasesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.landingbasesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLandingBasesDto: UpdateLandingBasesDto) {
    return this.landingbasesservice.update(id, updateLandingBasesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landingbasesservice.remove(id);
  }
}