import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bNoPinService } from './ppv04b-no-pin.service';
import { CreatePpv04bNoPinDto } from './dto/create-ppv04b-no-pin.dto';
import { UpdatePpv04bNoPinDto } from './dto/update-ppv04b-no-pin.dto';

@Controller('ppv04b_no_pin')
export class Ppv04bNoPinController {
  constructor(private readonly ppv04bnopinservice: Ppv04bNoPinService) {}

  @Post()
  create(@Body() createPpv04bNoPinDto: CreatePpv04bNoPinDto) {
    return this.ppv04bnopinservice.create(createPpv04bNoPinDto);
  }

  @Get()
  findAll() {
    return this.ppv04bnopinservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bnopinservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bnopinservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bNoPinDto: UpdatePpv04bNoPinDto) {
    return this.ppv04bnopinservice.update(id, updatePpv04bNoPinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bnopinservice.remove(id);
  }
}