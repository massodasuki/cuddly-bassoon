import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bPaymentService } from './ppv04b-payment.service';
import { CreatePpv04bPaymentDto } from './dto/create-ppv04b-payment.dto';
import { UpdatePpv04bPaymentDto } from './dto/update-ppv04b-payment.dto';

@Controller('ppv04b_payment')
export class Ppv04bPaymentController {
  constructor(private readonly ppv04bpaymentservice: Ppv04bPaymentService) {}

  @Post()
  create(@Body() createPpv04bPaymentDto: CreatePpv04bPaymentDto) {
    return this.ppv04bpaymentservice.create(createPpv04bPaymentDto);
  }

  @Get()
  findAll() {
    return this.ppv04bpaymentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bpaymentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bpaymentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bPaymentDto: UpdatePpv04bPaymentDto) {
    return this.ppv04bpaymentservice.update(id, updatePpv04bPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bpaymentservice.remove(id);
  }
}