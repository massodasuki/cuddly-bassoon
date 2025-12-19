import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bApplyDateHobOneService } from './ppv04b_apply_date_hob_one.service';
import { CreatePpv04bApplyDateHobOneDto } from './dto/create-ppv04b_apply_date_hob_one.dto';
import { UpdatePpv04bApplyDateHobOneDto } from './dto/update-ppv04b_apply_date_hob_one.dto';

@Controller('ppv04b_apply_date_hob_one')
export class Ppv04bApplyDateHobOneController {
  constructor(private readonly ppv04bapplydatehoboneservice: Ppv04bApplyDateHobOneService) {}

  @Post()
  create(@Body() createPpv04bApplyDateHobOneDto: CreatePpv04bApplyDateHobOneDto) {
    return this.ppv04bapplydatehoboneservice.create(createPpv04bApplyDateHobOneDto);
  }

  @Get()
  findAll() {
    return this.ppv04bapplydatehoboneservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bapplydatehoboneservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bapplydatehoboneservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bApplyDateHobOneDto: UpdatePpv04bApplyDateHobOneDto) {
    return this.ppv04bapplydatehoboneservice.update(id, updatePpv04bApplyDateHobOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bapplydatehoboneservice.remove(id);
  }
}