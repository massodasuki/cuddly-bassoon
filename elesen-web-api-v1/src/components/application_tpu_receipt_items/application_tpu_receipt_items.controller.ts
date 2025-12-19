import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationTpuReceiptItemsService } from './application_tpu_receipt_items.service';
import { CreateApplicationTpuReceiptItemsDto } from './dto/create-application_tpu_receipt_items.dto';
import { UpdateApplicationTpuReceiptItemsDto } from './dto/update-application_tpu_receipt_items.dto';

@Controller('application_tpu_receipt_items')
export class ApplicationTpuReceiptItemsController {
  constructor(private readonly applicationtpureceiptitemsservice: ApplicationTpuReceiptItemsService) {}

  @Post()
  create(@Body() createApplicationTpuReceiptItemsDto: CreateApplicationTpuReceiptItemsDto) {
    return this.applicationtpureceiptitemsservice.create(createApplicationTpuReceiptItemsDto);
  }

  @Get()
  findAll() {
    return this.applicationtpureceiptitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationtpureceiptitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationtpureceiptitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationTpuReceiptItemsDto: UpdateApplicationTpuReceiptItemsDto) {
    return this.applicationtpureceiptitemsservice.update(id, updateApplicationTpuReceiptItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationtpureceiptitemsservice.remove(id);
  }
}