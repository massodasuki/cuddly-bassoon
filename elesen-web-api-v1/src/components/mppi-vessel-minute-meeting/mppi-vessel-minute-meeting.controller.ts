import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMinuteMeetingService } from './mppi-vessel-minute-meeting.service';
import { CreateMppiVesselMinuteMeetingDto } from './dto/create-mppi-vessel-minute-meeting.dto';
import { UpdateMppiVesselMinuteMeetingDto } from './dto/update-mppi-vessel-minute-meeting.dto';

@Controller('mppi_vessel_minute_meeting')
export class MppiVesselMinuteMeetingController {
  constructor(private readonly mppivesselminutemeetingservice: MppiVesselMinuteMeetingService) {}

  @Post()
  create(@Body() createMppiVesselMinuteMeetingDto: CreateMppiVesselMinuteMeetingDto) {
    return this.mppivesselminutemeetingservice.create(createMppiVesselMinuteMeetingDto);
  }

  @Get()
  findAll() {
    return this.mppivesselminutemeetingservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselminutemeetingservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselminutemeetingservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMinuteMeetingDto: UpdateMppiVesselMinuteMeetingDto) {
    return this.mppivesselminutemeetingservice.update(id, updateMppiVesselMinuteMeetingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselminutemeetingservice.remove(id);
  }
}