import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpDomestikApplicationsService } from './slp-domestik-applications.service';
import { CreateSlpDomestikApplicationsDto } from './dto/create-slp-domestik-applications.dto';
import { UpdateSlpDomestikApplicationsDto } from './dto/update-slp-domestik-applications.dto';

@Controller('slp_domestik_applications')
export class SlpDomestikApplicationsController {
  constructor(private readonly slpdomestikapplicationsservice: SlpDomestikApplicationsService) {}

  @Post()
  create(@Body() createSlpDomestikApplicationsDto: CreateSlpDomestikApplicationsDto) {
    return this.slpdomestikapplicationsservice.create(createSlpDomestikApplicationsDto);
  }

  @Get()
  findAll() {
    return this.slpdomestikapplicationsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpdomestikapplicationsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpdomestikapplicationsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpDomestikApplicationsDto: UpdateSlpDomestikApplicationsDto) {
    return this.slpdomestikapplicationsservice.update(id, updateSlpDomestikApplicationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpdomestikapplicationsservice.remove(id);
  }
}