import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bApplyDateLpiService } from './ppv04b_apply_date_lpi.service';
import { CreatePpv04bApplyDateLpiDto } from './dto/create-ppv04b_apply_date_lpi.dto';
import { UpdatePpv04bApplyDateLpiDto } from './dto/update-ppv04b_apply_date_lpi.dto';

@Controller('ppv04b_apply_date_lpi')
export class Ppv04bApplyDateLpiController {
  constructor(private readonly ppv04bapplydatelpiservice: Ppv04bApplyDateLpiService) {}

  @Post()
  create(@Body() createPpv04bApplyDateLpiDto: CreatePpv04bApplyDateLpiDto) {
    return this.ppv04bapplydatelpiservice.create(createPpv04bApplyDateLpiDto);
  }

  @Get()
  findAll() {
    return this.ppv04bapplydatelpiservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bapplydatelpiservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bapplydatelpiservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bApplyDateLpiDto: UpdatePpv04bApplyDateLpiDto) {
    return this.ppv04bapplydatelpiservice.update(id, updatePpv04bApplyDateLpiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bapplydatelpiservice.remove(id);
  }
}