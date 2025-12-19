import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Mesyuarat5004aService } from './mesyuarat_50_04a.service';
import { CreateMesyuarat5004aDto } from './dto/create-mesyuarat_50_04a.dto';
import { UpdateMesyuarat5004aDto } from './dto/update-mesyuarat_50_04a.dto';

@Controller('mesyuarat_50_04a')
export class Mesyuarat5004aController {
  constructor(private readonly mesyuarat5004aservice: Mesyuarat5004aService) {}

  @Post()
  create(@Body() createMesyuarat5004aDto: CreateMesyuarat5004aDto) {
    return this.mesyuarat5004aservice.create(createMesyuarat5004aDto);
  }

  @Get()
  findAll() {
    return this.mesyuarat5004aservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesyuarat5004aservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.mesyuarat5004aservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMesyuarat5004aDto: UpdateMesyuarat5004aDto) {
    return this.mesyuarat5004aservice.update(id, updateMesyuarat5004aDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesyuarat5004aservice.remove(id);
  }
}