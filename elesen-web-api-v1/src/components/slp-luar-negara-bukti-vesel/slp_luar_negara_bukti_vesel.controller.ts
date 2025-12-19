import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpLuarNegaraBuktiVeselService } from './slp_luar_negara_bukti_vesel.service';
import { CreateSlpLuarNegaraBuktiVeselDto } from './dto/create-slp_luar_negara_bukti_vesel.dto';
import { UpdateSlpLuarNegaraBuktiVeselDto } from './dto/update-slp_luar_negara_bukti_vesel.dto';

@Controller('slp_luar_negara_bukti_vesel')
export class SlpLuarNegaraBuktiVeselController {
  constructor(private readonly slpluarnegarabuktiveselservice: SlpLuarNegaraBuktiVeselService) {}

  @Post()
  create(@Body() createSlpLuarNegaraBuktiVeselDto: CreateSlpLuarNegaraBuktiVeselDto) {
    return this.slpluarnegarabuktiveselservice.create(createSlpLuarNegaraBuktiVeselDto);
  }

  @Get()
  findAll() {
    return this.slpluarnegarabuktiveselservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpluarnegarabuktiveselservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpluarnegarabuktiveselservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpLuarNegaraBuktiVeselDto: UpdateSlpLuarNegaraBuktiVeselDto) {
    return this.slpluarnegarabuktiveselservice.update(id, updateSlpLuarNegaraBuktiVeselDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpluarnegarabuktiveselservice.remove(id);
  }
}