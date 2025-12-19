import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpLuarNegaraApplicationsService } from './slp_luar_negara_applications.service';
import { CreateSlpLuarNegaraApplicationsDto } from './dto/create-slp_luar_negara_applications.dto';
import { UpdateSlpLuarNegaraApplicationsDto } from './dto/update-slp_luar_negara_applications.dto';

@Controller('slp_luar_negara_applications')
export class SlpLuarNegaraApplicationsController {
  constructor(private readonly slpluarnegaraapplicationsservice: SlpLuarNegaraApplicationsService) {}

  @Post()
  create(@Body() createSlpLuarNegaraApplicationsDto: CreateSlpLuarNegaraApplicationsDto) {
    return this.slpluarnegaraapplicationsservice.create(createSlpLuarNegaraApplicationsDto);
  }

  @Get()
  findAll() {
    return this.slpluarnegaraapplicationsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpluarnegaraapplicationsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpluarnegaraapplicationsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpLuarNegaraApplicationsDto: UpdateSlpLuarNegaraApplicationsDto) {
    return this.slpluarnegaraapplicationsservice.update(id, updateSlpLuarNegaraApplicationsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpluarnegaraapplicationsservice.remove(id);
  }
}