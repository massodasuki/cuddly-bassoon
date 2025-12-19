import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Permohonan04aService } from './permohonan_04a.service';
import { CreatePermohonan04aDto } from './dto/create-permohonan_04a.dto';
import { UpdatePermohonan04aDto } from './dto/update-permohonan_04a.dto';

@Controller('permohonan_04a')
export class Permohonan04aController {
  constructor(private readonly permohonan04aservice: Permohonan04aService) {}

  @Post()
  create(@Body() createPermohonan04aDto: CreatePermohonan04aDto) {
    return this.permohonan04aservice.create(createPermohonan04aDto);
  }

  @Get()
  findAll() {
    return this.permohonan04aservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permohonan04aservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.permohonan04aservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermohonan04aDto: UpdatePermohonan04aDto) {
    return this.permohonan04aservice.update(id, updatePermohonan04aDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permohonan04aservice.remove(id);
  }
}