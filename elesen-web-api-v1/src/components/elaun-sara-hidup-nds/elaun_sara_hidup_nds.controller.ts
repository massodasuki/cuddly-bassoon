import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElaunSaraHidupNdsService } from './elaun_sara_hidup_nds.service';
import { CreateElaunSaraHidupNdsDto } from './dto/create-elaun_sara_hidup_nds.dto';
import { UpdateElaunSaraHidupNdsDto } from './dto/update-elaun_sara_hidup_nds.dto';

@Controller('elaun_sara_hidup_nds')
export class ElaunSaraHidupNdsController {
  constructor(private readonly elaunsarahidupndsservice: ElaunSaraHidupNdsService) {}

  @Post()
  create(@Body() createElaunSaraHidupNdsDto: CreateElaunSaraHidupNdsDto) {
    return this.elaunsarahidupndsservice.create(createElaunSaraHidupNdsDto);
  }

  @Get()
  findAll() {
    return this.elaunsarahidupndsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elaunsarahidupndsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.elaunsarahidupndsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElaunSaraHidupNdsDto: UpdateElaunSaraHidupNdsDto) {
    return this.elaunsarahidupndsservice.update(id, updateElaunSaraHidupNdsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elaunsarahidupndsservice.remove(id);
  }
}