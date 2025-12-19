import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselMinuteMeetingService } from './ppv04a_vessel_minute_meeting.service';
import { CreatePpv04aVesselMinuteMeetingDto } from './dto/create-ppv04a_vessel_minute_meeting.dto';
import { UpdatePpv04aVesselMinuteMeetingDto } from './dto/update-ppv04a_vessel_minute_meeting.dto';

@Controller('ppv04a_vessel_minute_meeting')
export class Ppv04aVesselMinuteMeetingController {
  constructor(private readonly ppv04avesselminutemeetingservice: Ppv04aVesselMinuteMeetingService) {}

  @Post()
  create(@Body() createPpv04aVesselMinuteMeetingDto: CreatePpv04aVesselMinuteMeetingDto) {
    return this.ppv04avesselminutemeetingservice.create(createPpv04aVesselMinuteMeetingDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselminutemeetingservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselminutemeetingservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselminutemeetingservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselMinuteMeetingDto: UpdatePpv04aVesselMinuteMeetingDto) {
    return this.ppv04avesselminutemeetingservice.update(id, updatePpv04aVesselMinuteMeetingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselminutemeetingservice.remove(id);
  }
}