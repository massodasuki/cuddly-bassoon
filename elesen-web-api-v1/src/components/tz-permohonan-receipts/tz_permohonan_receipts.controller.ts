import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanReceiptsService } from './tz_permohonan_receipts.service';
import { CreateTzPermohonanReceiptsDto } from './dto/create-tz_permohonan_receipts.dto';
import { UpdateTzPermohonanReceiptsDto } from './dto/update-tz_permohonan_receipts.dto';

@Controller('tz_permohonan_receipts')
export class TzPermohonanReceiptsController {
  constructor(private readonly tzpermohonanreceiptsservice: TzPermohonanReceiptsService) {}

  @Post()
  create(@Body() createTzPermohonanReceiptsDto: CreateTzPermohonanReceiptsDto) {
    return this.tzpermohonanreceiptsservice.create(createTzPermohonanReceiptsDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonanreceiptsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonanreceiptsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonanreceiptsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanReceiptsDto: UpdateTzPermohonanReceiptsDto) {
    return this.tzpermohonanreceiptsservice.update(id, updateTzPermohonanReceiptsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonanreceiptsservice.remove(id);
  }
}