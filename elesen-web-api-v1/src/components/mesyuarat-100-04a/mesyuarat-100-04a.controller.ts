import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Mesyuarat10004aService } from './mesyuarat-100-04a.service';
import { CreateMesyuarat10004aDto } from './dto/create-mesyuarat-100-04a.dto';
import { UpdateMesyuarat10004aDto } from './dto/update-mesyuarat-100-04a.dto';

@Controller('mesyuarat_100_04a')
export class Mesyuarat10004aController {
  constructor(private readonly mesyuarat10004aservice: Mesyuarat10004aService) {}

  @Post()
  create(@Body() createMesyuarat10004aDto: CreateMesyuarat10004aDto) {
    return this.mesyuarat10004aservice.create(createMesyuarat10004aDto);
  }

  @Get()
  findAll() {
    return this.mesyuarat10004aservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesyuarat10004aservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mesyuarat10004aservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesyuarat10004aDto: UpdateMesyuarat10004aDto) {
    return this.mesyuarat10004aservice.update(id, updateMesyuarat10004aDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesyuarat10004aservice.remove(id);
  }
}