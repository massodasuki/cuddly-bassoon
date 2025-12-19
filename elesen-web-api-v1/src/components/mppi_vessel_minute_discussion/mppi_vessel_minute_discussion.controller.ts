import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMinuteDiscussionService } from './mppi_vessel_minute_discussion.service';
import { CreateMppiVesselMinuteDiscussionDto } from './dto/create-mppi_vessel_minute_discussion.dto';
import { UpdateMppiVesselMinuteDiscussionDto } from './dto/update-mppi_vessel_minute_discussion.dto';

@Controller('mppi_vessel_minute_discussion')
export class MppiVesselMinuteDiscussionController {
  constructor(private readonly mppivesselminutediscussionservice: MppiVesselMinuteDiscussionService) {}

  @Post()
  create(@Body() createMppiVesselMinuteDiscussionDto: CreateMppiVesselMinuteDiscussionDto) {
    return this.mppivesselminutediscussionservice.create(createMppiVesselMinuteDiscussionDto);
  }

  @Get()
  findAll() {
    return this.mppivesselminutediscussionservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselminutediscussionservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselminutediscussionservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMinuteDiscussionDto: UpdateMppiVesselMinuteDiscussionDto) {
    return this.mppivesselminutediscussionservice.update(id, updateMppiVesselMinuteDiscussionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselminutediscussionservice.remove(id);
  }
}