import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselMinuteOtherMattersService } from './mppi-vessel-minute-other-matters.service';
import { CreateMppiVesselMinuteOtherMattersDto } from './dto/create-mppi-vessel-minute-other-matters.dto';
import { UpdateMppiVesselMinuteOtherMattersDto } from './dto/update-mppi-vessel-minute-other-matters.dto';

@Controller('mppi_vessel_minute_other_matters')
export class MppiVesselMinuteOtherMattersController {
  constructor(private readonly mppivesselminuteothermattersservice: MppiVesselMinuteOtherMattersService) {}

  @Post()
  create(@Body() createMppiVesselMinuteOtherMattersDto: CreateMppiVesselMinuteOtherMattersDto) {
    return this.mppivesselminuteothermattersservice.create(createMppiVesselMinuteOtherMattersDto);
  }

  @Get()
  findAll() {
    return this.mppivesselminuteothermattersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselminuteothermattersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselminuteothermattersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselMinuteOtherMattersDto: UpdateMppiVesselMinuteOtherMattersDto) {
    return this.mppivesselminuteothermattersservice.update(id, updateMppiVesselMinuteOtherMattersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselminuteothermattersservice.remove(id);
  }
}