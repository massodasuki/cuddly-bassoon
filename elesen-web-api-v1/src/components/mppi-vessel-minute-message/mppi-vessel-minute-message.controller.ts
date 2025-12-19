import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMinuteMessageService } from './mppi-vessel-minute-message.service';
import { CreateMppiVesselMinuteMessageDto } from './dto/create-mppi-vessel-minute-message.dto';
import { UpdateMppiVesselMinuteMessageDto } from './dto/update-mppi-vessel-minute-message.dto';

@Controller('mppi_vessel_minute_message')
export class MppiVesselMinuteMessageController {
  constructor(private readonly mppivesselminutemessageservice: MppiVesselMinuteMessageService) {}

  @Post()
  create(@Body() createMppiVesselMinuteMessageDto: CreateMppiVesselMinuteMessageDto) {
    return this.mppivesselminutemessageservice.create(createMppiVesselMinuteMessageDto);
  }

  @Get()
  findAll() {
    return this.mppivesselminutemessageservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselminutemessageservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselminutemessageservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMinuteMessageDto: UpdateMppiVesselMinuteMessageDto) {
    return this.mppivesselminutemessageservice.update(id, updateMppiVesselMinuteMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselminutemessageservice.remove(id);
  }
}