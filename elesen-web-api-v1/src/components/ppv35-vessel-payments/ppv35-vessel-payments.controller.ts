import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv35VesselPaymentsService } from './ppv35-vessel-payments.service';
import { CreatePpv35VesselPaymentsDto } from './dto/create-ppv35-vessel-payments.dto';
import { UpdatePpv35VesselPaymentsDto } from './dto/update-ppv35-vessel-payments.dto';

@Controller('ppv35_vessel_payments')
export class Ppv35VesselPaymentsController {
  constructor(private readonly ppv35vesselpaymentsservice: Ppv35VesselPaymentsService) {}

  @Post()
  create(@Body() createPpv35VesselPaymentsDto: CreatePpv35VesselPaymentsDto) {
    return this.ppv35vesselpaymentsservice.create(createPpv35VesselPaymentsDto);
  }

  @Get()
  findAll() {
    return this.ppv35vesselpaymentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv35vesselpaymentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv35vesselpaymentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv35VesselPaymentsDto: UpdatePpv35VesselPaymentsDto) {
    return this.ppv35vesselpaymentsservice.update(id, updatePpv35VesselPaymentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv35vesselpaymentsservice.remove(id);
  }
}