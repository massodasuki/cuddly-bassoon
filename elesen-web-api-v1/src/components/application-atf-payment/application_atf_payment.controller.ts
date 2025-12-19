import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationAtfPaymentService } from './application_atf_payment.service';
import { CreateApplicationAtfPaymentDto } from './dto/create-application_atf_payment.dto';
import { UpdateApplicationAtfPaymentDto } from './dto/update-application_atf_payment.dto';

@Controller('application_atf_payment')
export class ApplicationAtfPaymentController {
  constructor(private readonly applicationatfpaymentservice: ApplicationAtfPaymentService) {}

  @Post()
  create(@Body() createApplicationAtfPaymentDto: CreateApplicationAtfPaymentDto) {
    return this.applicationatfpaymentservice.create(createApplicationAtfPaymentDto);
  }

  @Get()
  findAll() {
    return this.applicationatfpaymentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationatfpaymentservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationatfpaymentservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationAtfPaymentDto: UpdateApplicationAtfPaymentDto) {
    return this.applicationatfpaymentservice.update(id, updateApplicationAtfPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationatfpaymentservice.remove(id);
  }
}