import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselMinuteDiscussionService } from './ppv04a_vessel_minute_discussion.service';
import { CreatePpv04aVesselMinuteDiscussionDto } from './dto/create-ppv04a_vessel_minute_discussion.dto';
import { UpdatePpv04aVesselMinuteDiscussionDto } from './dto/update-ppv04a_vessel_minute_discussion.dto';

@Controller('ppv04a_vessel_minute_discussion')
export class Ppv04aVesselMinuteDiscussionController {
  constructor(private readonly ppv04avesselminutediscussionservice: Ppv04aVesselMinuteDiscussionService) {}

  @Post()
  create(@Body() createPpv04aVesselMinuteDiscussionDto: CreatePpv04aVesselMinuteDiscussionDto) {
    return this.ppv04avesselminutediscussionservice.create(createPpv04aVesselMinuteDiscussionDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselminutediscussionservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselminutediscussionservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselminutediscussionservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselMinuteDiscussionDto: UpdatePpv04aVesselMinuteDiscussionDto) {
    return this.ppv04avesselminutediscussionservice.update(id, updatePpv04aVesselMinuteDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselminutediscussionservice.remove(id);
  }
}