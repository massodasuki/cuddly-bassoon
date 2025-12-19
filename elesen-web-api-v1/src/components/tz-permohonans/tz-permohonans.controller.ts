import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonansService } from './tz-permohonans.service';
import { CreateTzPermohonansDto } from './dto/create-tz-permohonans.dto';
import { UpdateTzPermohonansDto } from './dto/update-tz-permohonans.dto';

@Controller('tz_permohonans')
export class TzPermohonansController {
  constructor(private readonly tzpermohonansservice: TzPermohonansService) {}

  @Post()
  create(@Body() createTzPermohonansDto: CreateTzPermohonansDto) {
    return this.tzpermohonansservice.create(createTzPermohonansDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonansservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonansservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonansservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonansDto: UpdateTzPermohonansDto) {
    return this.tzpermohonansservice.update(id, updateTzPermohonansDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonansservice.remove(id);
  }
}