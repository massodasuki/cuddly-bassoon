import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlpLuarNegaraDocumentsService } from './slp-luar-negara-documents.service';
import { CreateSlpLuarNegaraDocumentsDto } from './dto/create-slp-luar-negara-documents.dto';
import { UpdateSlpLuarNegaraDocumentsDto } from './dto/update-slp-luar-negara-documents.dto';

@Controller('slp_luar_negara_documents')
export class SlpLuarNegaraDocumentsController {
  constructor(private readonly slpluarnegaradocumentsservice: SlpLuarNegaraDocumentsService) {}

  @Post()
  create(@Body() createSlpLuarNegaraDocumentsDto: CreateSlpLuarNegaraDocumentsDto) {
    return this.slpluarnegaradocumentsservice.create(createSlpLuarNegaraDocumentsDto);
  }

  @Get()
  findAll() {
    return this.slpluarnegaradocumentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.slpluarnegaradocumentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.slpluarnegaradocumentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSlpLuarNegaraDocumentsDto: UpdateSlpLuarNegaraDocumentsDto) {
    return this.slpluarnegaradocumentsservice.update(id, updateSlpLuarNegaraDocumentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.slpluarnegaradocumentsservice.remove(id);
  }
}