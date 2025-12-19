import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanStatusHistoriesService } from './tz-permohonan-status-histories.service';
import { CreateTzPermohonanStatusHistoriesDto } from './dto/create-tz-permohonan-status-histories.dto';
import { UpdateTzPermohonanStatusHistoriesDto } from './dto/update-tz-permohonan-status-histories.dto';

@Controller('tz_permohonan_status_histories')
export class TzPermohonanStatusHistoriesController {
  constructor(private readonly tzpermohonanstatushistoriesservice: TzPermohonanStatusHistoriesService) {}

  @Post()
  create(@Body() createTzPermohonanStatusHistoriesDto: CreateTzPermohonanStatusHistoriesDto) {
    return this.tzpermohonanstatushistoriesservice.create(createTzPermohonanStatusHistoriesDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonanstatushistoriesservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonanstatushistoriesservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonanstatushistoriesservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanStatusHistoriesDto: UpdateTzPermohonanStatusHistoriesDto) {
    return this.tzpermohonanstatushistoriesservice.update(id, updateTzPermohonanStatusHistoriesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonanstatushistoriesservice.remove(id);
  }
}