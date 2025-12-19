import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bMailInspectionOneService } from './ppv04b-mail-inspection-one.service';
import { CreatePpv04bMailInspectionOneDto } from './dto/create-ppv04b-mail-inspection-one.dto';
import { UpdatePpv04bMailInspectionOneDto } from './dto/update-ppv04b-mail-inspection-one.dto';

@Controller('ppv04b_mail_inspection_one')
export class Ppv04bMailInspectionOneController {
  constructor(private readonly ppv04bmailinspectiononeservice: Ppv04bMailInspectionOneService) {}

  @Post()
  create(@Body() createPpv04bMailInspectionOneDto: CreatePpv04bMailInspectionOneDto) {
    return this.ppv04bmailinspectiononeservice.create(createPpv04bMailInspectionOneDto);
  }

  @Get()
  findAll() {
    return this.ppv04bmailinspectiononeservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bmailinspectiononeservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bmailinspectiononeservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bMailInspectionOneDto: UpdatePpv04bMailInspectionOneDto) {
    return this.ppv04bmailinspectiononeservice.update(id, updatePpv04bMailInspectionOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bmailinspectiononeservice.remove(id);
  }
}