import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpDomestikBuktiVeselService } from './slp-domestik-bukti-vesel.service';
import { CreateSlpDomestikBuktiVeselDto } from './dto/create-slp-domestik-bukti-vesel.dto';
import { UpdateSlpDomestikBuktiVeselDto } from './dto/update-slp-domestik-bukti-vesel.dto';

@Controller('slp_domestik_bukti_vesel')
export class SlpDomestikBuktiVeselController {
  constructor(private readonly slpdomestikbuktiveselservice: SlpDomestikBuktiVeselService) {}

  @Post()
  create(@Body() createSlpDomestikBuktiVeselDto: CreateSlpDomestikBuktiVeselDto) {
    return this.slpdomestikbuktiveselservice.create(createSlpDomestikBuktiVeselDto);
  }

  @Get()
  findAll() {
    return this.slpdomestikbuktiveselservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpdomestikbuktiveselservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpdomestikbuktiveselservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpDomestikBuktiVeselDto: UpdateSlpDomestikBuktiVeselDto) {
    return this.slpdomestikbuktiveselservice.update(id, updateSlpDomestikBuktiVeselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpdomestikbuktiveselservice.remove(id);
  }
}