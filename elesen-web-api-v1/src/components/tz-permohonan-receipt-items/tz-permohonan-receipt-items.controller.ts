import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanReceiptItemsService } from './tz-permohonan-receipt-items.service';
import { CreateTzPermohonanReceiptItemsDto } from './dto/create-tz-permohonan-receipt-items.dto';
import { UpdateTzPermohonanReceiptItemsDto } from './dto/update-tz-permohonan-receipt-items.dto';

@Controller('tz_permohonan_receipt_items')
export class TzPermohonanReceiptItemsController {
  constructor(private readonly tzpermohonanreceiptitemsservice: TzPermohonanReceiptItemsService) {}

  @Post()
  create(@Body() createTzPermohonanReceiptItemsDto: CreateTzPermohonanReceiptItemsDto) {
    return this.tzpermohonanreceiptitemsservice.create(createTzPermohonanReceiptItemsDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonanreceiptitemsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonanreceiptitemsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonanreceiptitemsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanReceiptItemsDto: UpdateTzPermohonanReceiptItemsDto) {
    return this.tzpermohonanreceiptitemsservice.update(id, updateTzPermohonanReceiptItemsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonanreceiptitemsservice.remove(id);
  }
}