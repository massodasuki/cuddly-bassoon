import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bsService } from './ppv04bs.service';
import { CreatePpv04bsDto } from './dto/create-ppv04bs.dto';
import { UpdatePpv04bsDto } from './dto/update-ppv04bs.dto';

@Controller('ppv04bs')
export class Ppv04bsController {
  constructor(private readonly ppv04bsservice: Ppv04bsService) {}

  @Post()
  create(@Body() createPpv04bsDto: CreatePpv04bsDto) {
    return this.ppv04bsservice.create(createPpv04bsDto);
  }

  @Get()
  findAll() {
    return this.ppv04bsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bsDto: UpdatePpv04bsDto) {
    return this.ppv04bsservice.update(id, updatePpv04bsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bsservice.remove(id);
  }
}