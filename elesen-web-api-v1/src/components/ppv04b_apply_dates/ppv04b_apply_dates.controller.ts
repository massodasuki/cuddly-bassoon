import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bApplyDatesService } from './ppv04b_apply_dates.service';
import { CreatePpv04bApplyDatesDto } from './dto/create-ppv04b_apply_dates.dto';
import { UpdatePpv04bApplyDatesDto } from './dto/update-ppv04b_apply_dates.dto';

@Controller('ppv04b_apply_dates')
export class Ppv04bApplyDatesController {
  constructor(private readonly ppv04bapplydatesservice: Ppv04bApplyDatesService) {}

  @Post()
  create(@Body() createPpv04bApplyDatesDto: CreatePpv04bApplyDatesDto) {
    return this.ppv04bapplydatesservice.create(createPpv04bApplyDatesDto);
  }

  @Get()
  findAll() {
    return this.ppv04bapplydatesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bapplydatesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bapplydatesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bApplyDatesDto: UpdatePpv04bApplyDatesDto) {
    return this.ppv04bapplydatesservice.update(id, updatePpv04bApplyDatesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bapplydatesservice.remove(id);
  }
}