import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselPaymentInfoService } from './mppi_vessel_payment_info.service';
import { CreateMppiVesselPaymentInfoDto } from './dto/create-mppi_vessel_payment_info.dto';
import { UpdateMppiVesselPaymentInfoDto } from './dto/update-mppi_vessel_payment_info.dto';

@Controller('mppi_vessel_payment_info')
export class MppiVesselPaymentInfoController {
  constructor(private readonly mppivesselpaymentinfoservice: MppiVesselPaymentInfoService) {}

  @Post()
  create(@Body() createMppiVesselPaymentInfoDto: CreateMppiVesselPaymentInfoDto) {
    return this.mppivesselpaymentinfoservice.create(createMppiVesselPaymentInfoDto);
  }

  @Get()
  findAll() {
    return this.mppivesselpaymentinfoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselpaymentinfoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselpaymentinfoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselPaymentInfoDto: UpdateMppiVesselPaymentInfoDto) {
    return this.mppivesselpaymentinfoservice.update(id, updateMppiVesselPaymentInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselpaymentinfoservice.remove(id);
  }
}