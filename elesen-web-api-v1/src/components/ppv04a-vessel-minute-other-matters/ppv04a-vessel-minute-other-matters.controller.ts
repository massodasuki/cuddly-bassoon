import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselMinuteOtherMattersService } from './ppv04a-vessel-minute-other-matters.service';
import { CreatePpv04aVesselMinuteOtherMattersDto } from './dto/create-ppv04a-vessel-minute-other-matters.dto';
import { UpdatePpv04aVesselMinuteOtherMattersDto } from './dto/update-ppv04a-vessel-minute-other-matters.dto';

@Controller('ppv04a_vessel_minute_other_matters')
export class Ppv04aVesselMinuteOtherMattersController {
  constructor(private readonly ppv04avesselminuteothermattersservice: Ppv04aVesselMinuteOtherMattersService) {}

  @Post()
  create(@Body() createPpv04aVesselMinuteOtherMattersDto: CreatePpv04aVesselMinuteOtherMattersDto) {
    return this.ppv04avesselminuteothermattersservice.create(createPpv04aVesselMinuteOtherMattersDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselminuteothermattersservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselminuteothermattersservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselminuteothermattersservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselMinuteOtherMattersDto: UpdatePpv04aVesselMinuteOtherMattersDto) {
    return this.ppv04avesselminuteothermattersservice.update(id, updatePpv04aVesselMinuteOtherMattersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselminuteothermattersservice.remove(id);
  }
}