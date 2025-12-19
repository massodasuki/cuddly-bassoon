import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv35VesselPaymentItemsService } from './ppv35_vessel_payment_items.service';
import { CreatePpv35VesselPaymentItemsDto } from './dto/create-ppv35_vessel_payment_items.dto';
import { UpdatePpv35VesselPaymentItemsDto } from './dto/update-ppv35_vessel_payment_items.dto';

@Controller('ppv35_vessel_payment_items')
export class Ppv35VesselPaymentItemsController {
  constructor(private readonly ppv35vesselpaymentitemsservice: Ppv35VesselPaymentItemsService) {}

  @Post()
  create(@Body() createPpv35VesselPaymentItemsDto: CreatePpv35VesselPaymentItemsDto) {
    return this.ppv35vesselpaymentitemsservice.create(createPpv35VesselPaymentItemsDto);
  }

  @Get()
  findAll() {
    return this.ppv35vesselpaymentitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv35vesselpaymentitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv35vesselpaymentitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv35VesselPaymentItemsDto: UpdatePpv35VesselPaymentItemsDto) {
    return this.ppv35vesselpaymentitemsservice.update(id, updatePpv35VesselPaymentItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv35vesselpaymentitemsservice.remove(id);
  }
}