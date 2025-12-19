import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MppiVesselPaymentService } from './mppi-vessel-payment.service';
import { CreateMppiVesselPaymentDto } from './dto/create-mppi-vessel-payment.dto';
import { UpdateMppiVesselPaymentDto } from './dto/update-mppi-vessel-payment.dto';

@Controller('mppi_vessel_payment')
export class MppiVesselPaymentController {
  constructor(private readonly mppivesselpaymentservice: MppiVesselPaymentService) {}

  @Post()
  create(@Body() createMppiVesselPaymentDto: CreateMppiVesselPaymentDto) {
    return this.mppivesselpaymentservice.create(createMppiVesselPaymentDto);
  }

  @Get()
  findAll() {
    return this.mppivesselpaymentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mppivesselpaymentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mppivesselpaymentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMppiVesselPaymentDto: UpdateMppiVesselPaymentDto) {
    return this.mppivesselpaymentservice.update(id, updateMppiVesselPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mppivesselpaymentservice.remove(id);
  }
}