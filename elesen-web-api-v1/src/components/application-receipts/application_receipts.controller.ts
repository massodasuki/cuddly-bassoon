import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApplicationReceiptsService } from './application_receipts.service';
import { CreateApplicationReceiptsDto } from './dto/create-application_receipts.dto';
import { UpdateApplicationReceiptsDto } from './dto/update-application_receipts.dto';

@Controller('application_receipts')
export class ApplicationReceiptsController {
  constructor(private readonly applicationreceiptsservice: ApplicationReceiptsService) {}

  @Post()
  create(@Body() createApplicationReceiptsDto: CreateApplicationReceiptsDto) {
    return this.applicationreceiptsservice.create(createApplicationReceiptsDto);
  }

  @Get()
  findAll() {
    return this.applicationreceiptsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicationreceiptsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.applicationreceiptsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicationReceiptsDto: UpdateApplicationReceiptsDto) {
    return this.applicationreceiptsservice.update(id, updateApplicationReceiptsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicationreceiptsservice.remove(id);
  }
}