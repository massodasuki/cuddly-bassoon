import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanDocumentsService } from './tz-permohonan-documents.service';
import { CreateTzPermohonanDocumentsDto } from './dto/create-tz-permohonan-documents.dto';
import { UpdateTzPermohonanDocumentsDto } from './dto/update-tz-permohonan-documents.dto';

@Controller('tz_permohonan_documents')
export class TzPermohonanDocumentsController {
  constructor(private readonly tzpermohonandocumentsservice: TzPermohonanDocumentsService) {}

  @Post()
  create(@Body() createTzPermohonanDocumentsDto: CreateTzPermohonanDocumentsDto) {
    return this.tzpermohonandocumentsservice.create(createTzPermohonanDocumentsDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonandocumentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonandocumentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonandocumentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanDocumentsDto: UpdateTzPermohonanDocumentsDto) {
    return this.tzpermohonandocumentsservice.update(id, updateTzPermohonanDocumentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonandocumentsservice.remove(id);
  }
}