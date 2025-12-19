import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselMinuteMessageService } from './ppv04a_vessel_minute_message.service';
import { CreatePpv04aVesselMinuteMessageDto } from './dto/create-ppv04a_vessel_minute_message.dto';
import { UpdatePpv04aVesselMinuteMessageDto } from './dto/update-ppv04a_vessel_minute_message.dto';

@Controller('ppv04a_vessel_minute_message')
export class Ppv04aVesselMinuteMessageController {
  constructor(private readonly ppv04avesselminutemessageservice: Ppv04aVesselMinuteMessageService) {}

  @Post()
  create(@Body() createPpv04aVesselMinuteMessageDto: CreatePpv04aVesselMinuteMessageDto) {
    return this.ppv04avesselminutemessageservice.create(createPpv04aVesselMinuteMessageDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselminutemessageservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselminutemessageservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselminutemessageservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselMinuteMessageDto: UpdatePpv04aVesselMinuteMessageDto) {
    return this.ppv04avesselminutemessageservice.update(id, updatePpv04aVesselMinuteMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselminutemessageservice.remove(id);
  }
}