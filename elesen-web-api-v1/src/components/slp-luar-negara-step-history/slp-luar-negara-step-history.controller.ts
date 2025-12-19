import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpLuarNegaraStepHistoryService } from './slp-luar-negara-step-history.service';
import { CreateSlpLuarNegaraStepHistoryDto } from './dto/create-slp-luar-negara-step-history.dto';
import { UpdateSlpLuarNegaraStepHistoryDto } from './dto/update-slp-luar-negara-step-history.dto';

@Controller('slp_luar_negara_step_history')
export class SlpLuarNegaraStepHistoryController {
  constructor(private readonly slpluarnegarastephistoryservice: SlpLuarNegaraStepHistoryService) {}

  @Post()
  create(@Body() createSlpLuarNegaraStepHistoryDto: CreateSlpLuarNegaraStepHistoryDto) {
    return this.slpluarnegarastephistoryservice.create(createSlpLuarNegaraStepHistoryDto);
  }

  @Get()
  findAll() {
    return this.slpluarnegarastephistoryservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpluarnegarastephistoryservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpluarnegarastephistoryservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpLuarNegaraStepHistoryDto: UpdateSlpLuarNegaraStepHistoryDto) {
    return this.slpluarnegarastephistoryservice.update(id, updateSlpLuarNegaraStepHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpluarnegarastephistoryservice.remove(id);
  }
}