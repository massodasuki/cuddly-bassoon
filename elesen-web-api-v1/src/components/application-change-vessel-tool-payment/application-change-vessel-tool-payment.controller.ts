import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationChangeVesselToolPaymentService } from './application-change-vessel-tool-payment.service';
import { CreateApplicationChangeVesselToolPaymentDto } from './dto/create-application-change-vessel-tool-payment.dto';
import { UpdateApplicationChangeVesselToolPaymentDto } from './dto/update-application-change-vessel-tool-payment.dto';

@Controller('application_change_vessel_tool_payment')
export class ApplicationChangeVesselToolPaymentController {
  constructor(private readonly applicationchangevesseltoolpaymentservice: ApplicationChangeVesselToolPaymentService) {}

  @Post()
  create(@Body() createApplicationChangeVesselToolPaymentDto: CreateApplicationChangeVesselToolPaymentDto) {
    return this.applicationchangevesseltoolpaymentservice.create(createApplicationChangeVesselToolPaymentDto);
  }

  @Get()
  findAll() {
    return this.applicationchangevesseltoolpaymentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationchangevesseltoolpaymentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationchangevesseltoolpaymentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationChangeVesselToolPaymentDto: UpdateApplicationChangeVesselToolPaymentDto) {
    return this.applicationchangevesseltoolpaymentservice.update(id, updateApplicationChangeVesselToolPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationchangevesseltoolpaymentservice.remove(id);
  }
}