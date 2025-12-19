import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bApplyDateTwoService } from './ppv04b_apply_date_two.service';
import { CreatePpv04bApplyDateTwoDto } from './dto/create-ppv04b_apply_date_two.dto';
import { UpdatePpv04bApplyDateTwoDto } from './dto/update-ppv04b_apply_date_two.dto';

@Controller('ppv04b_apply_date_two')
export class Ppv04bApplyDateTwoController {
  constructor(private readonly ppv04bapplydatetwoservice: Ppv04bApplyDateTwoService) {}

  @Post()
  create(@Body() createPpv04bApplyDateTwoDto: CreatePpv04bApplyDateTwoDto) {
    return this.ppv04bapplydatetwoservice.create(createPpv04bApplyDateTwoDto);
  }

  @Get()
  findAll() {
    return this.ppv04bapplydatetwoservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bapplydatetwoservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bapplydatetwoservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bApplyDateTwoDto: UpdatePpv04bApplyDateTwoDto) {
    return this.ppv04bapplydatetwoservice.update(id, updatePpv04bApplyDateTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bapplydatetwoservice.remove(id);
  }
}