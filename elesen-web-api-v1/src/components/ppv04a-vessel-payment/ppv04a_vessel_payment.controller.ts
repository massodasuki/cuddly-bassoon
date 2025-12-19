import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04aVesselPaymentService } from './ppv04a_vessel_payment.service';
import { CreatePpv04aVesselPaymentDto } from './dto/create-ppv04a_vessel_payment.dto';
import { UpdatePpv04aVesselPaymentDto } from './dto/update-ppv04a_vessel_payment.dto';

@Controller('ppv04a_vessel_payment')
export class Ppv04aVesselPaymentController {
  constructor(private readonly ppv04avesselpaymentservice: Ppv04aVesselPaymentService) {}

  @Post()
  create(@Body() createPpv04aVesselPaymentDto: CreatePpv04aVesselPaymentDto) {
    return this.ppv04avesselpaymentservice.create(createPpv04aVesselPaymentDto);
  }

  @Get()
  findAll() {
    return this.ppv04avesselpaymentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04avesselpaymentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04avesselpaymentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04aVesselPaymentDto: UpdatePpv04aVesselPaymentDto) {
    return this.ppv04avesselpaymentservice.update(id, updatePpv04aVesselPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04avesselpaymentservice.remove(id);
  }
}