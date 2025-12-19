import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EshndPaymentLogsService } from './eshnd-payment-logs.service';
import { CreateEshndPaymentLogsDto } from './dto/create-eshnd-payment-logs.dto';
import { UpdateEshndPaymentLogsDto } from './dto/update-eshnd-payment-logs.dto';

@Controller('eshnd_payment_logs')
export class EshndPaymentLogsController {
  constructor(private readonly eshndpaymentlogsservice: EshndPaymentLogsService) {}

  @Post()
  create(@Body() createEshndPaymentLogsDto: CreateEshndPaymentLogsDto) {
    return this.eshndpaymentlogsservice.create(createEshndPaymentLogsDto);
  }

  @Get()
  findAll() {
    return this.eshndpaymentlogsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eshndpaymentlogsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.eshndpaymentlogsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEshndPaymentLogsDto: UpdateEshndPaymentLogsDto) {
    return this.eshndpaymentlogsservice.update(id, updateEshndPaymentLogsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eshndpaymentlogsservice.remove(id);
  }
}