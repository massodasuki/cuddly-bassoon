import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselApplicationService } from './ppv04a-vessel-application.service';
import { CreatePpv04aVesselApplicationDto } from './dto/create-ppv04a-vessel-application.dto';
import { UpdatePpv04aVesselApplicationDto } from './dto/update-ppv04a-vessel-application.dto';

@Controller('ppv04a_vessel_application')
export class Ppv04aVesselApplicationController {
  constructor(private readonly ppv04avesselapplicationservice: Ppv04aVesselApplicationService) {}

  @Post()
  create(@Body() createPpv04aVesselApplicationDto: CreatePpv04aVesselApplicationDto) {
    return this.ppv04avesselapplicationservice.create(createPpv04aVesselApplicationDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselapplicationservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselapplicationservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselapplicationservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselApplicationDto: UpdatePpv04aVesselApplicationDto) {
    return this.ppv04avesselapplicationservice.update(id, updatePpv04aVesselApplicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselapplicationservice.remove(id);
  }
}