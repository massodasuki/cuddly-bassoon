import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationReceiptItemsService } from './application_receipt_items.service';
import { CreateApplicationReceiptItemsDto } from './dto/create-application_receipt_items.dto';
import { UpdateApplicationReceiptItemsDto } from './dto/update-application_receipt_items.dto';

@Controller('application_receipt_items')
export class ApplicationReceiptItemsController {
  constructor(private readonly applicationreceiptitemsservice: ApplicationReceiptItemsService) {}

  @Post()
  create(@Body() createApplicationReceiptItemsDto: CreateApplicationReceiptItemsDto) {
    return this.applicationreceiptitemsservice.create(createApplicationReceiptItemsDto);
  }

  @Get()
  findAll() {
    return this.applicationreceiptitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationreceiptitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationreceiptitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationReceiptItemsDto: UpdateApplicationReceiptItemsDto) {
    return this.applicationreceiptitemsservice.update(id, updateApplicationReceiptItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationreceiptitemsservice.remove(id);
  }
}