import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Ppv04bCheck212Service } from './ppv04b-check-212.service';
import { CreatePpv04bCheck212Dto } from './dto/create-ppv04b-check-212.dto';
import { UpdatePpv04bCheck212Dto } from './dto/update-ppv04b-check-212.dto';

@Controller('ppv04b_check_212')
export class Ppv04bCheck212Controller {
  constructor(private readonly ppv04bcheck212service: Ppv04bCheck212Service) {}

  @Post()
  create(@Body() createPpv04bCheck212Dto: CreatePpv04bCheck212Dto) {
    return this.ppv04bcheck212service.create(createPpv04bCheck212Dto);
  }

  @Get()
  findAll() {
    return this.ppv04bcheck212service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ppv04bcheck212service.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.ppv04bcheck212service.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePpv04bCheck212Dto: UpdatePpv04bCheck212Dto) {
    return this.ppv04bcheck212service.update(id, updatePpv04bCheck212Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ppv04bcheck212service.remove(id);
  }
}