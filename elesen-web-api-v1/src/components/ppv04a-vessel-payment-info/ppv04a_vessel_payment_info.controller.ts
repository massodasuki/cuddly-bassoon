import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselPaymentInfoService } from './ppv04a_vessel_payment_info.service';
import { CreatePpv04aVesselPaymentInfoDto } from './dto/create-ppv04a_vessel_payment_info.dto';
import { UpdatePpv04aVesselPaymentInfoDto } from './dto/update-ppv04a_vessel_payment_info.dto';

@Controller('ppv04a_vessel_payment_info')
export class Ppv04aVesselPaymentInfoController {
  constructor(private readonly ppv04avesselpaymentinfoservice: Ppv04aVesselPaymentInfoService) {}

  @Post()
  create(@Body() createPpv04aVesselPaymentInfoDto: CreatePpv04aVesselPaymentInfoDto) {
    return this.ppv04avesselpaymentinfoservice.create(createPpv04aVesselPaymentInfoDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselpaymentinfoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselpaymentinfoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselpaymentinfoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselPaymentInfoDto: UpdatePpv04aVesselPaymentInfoDto) {
    return this.ppv04avesselpaymentinfoservice.update(id, updatePpv04aVesselPaymentInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselpaymentinfoservice.remove(id);
  }
}