import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TzPermohonanRayuanDocumentsService } from './tz-permohonan-rayuan-documents.service';
import { CreateTzPermohonanRayuanDocumentsDto } from './dto/create-tz-permohonan-rayuan-documents.dto';
import { UpdateTzPermohonanRayuanDocumentsDto } from './dto/update-tz-permohonan-rayuan-documents.dto';

@Controller('tz_permohonan_rayuan_documents')
export class TzPermohonanRayuanDocumentsController {
  constructor(private readonly tzpermohonanrayuandocumentsservice: TzPermohonanRayuanDocumentsService) {}

  @Post()
  create(@Body() createTzPermohonanRayuanDocumentsDto: CreateTzPermohonanRayuanDocumentsDto) {
    return this.tzpermohonanrayuandocumentsservice.create(createTzPermohonanRayuanDocumentsDto);
  }

  @Get()
  findAll() {
    return this.tzpermohonanrayuandocumentsservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tzpermohonanrayuandocumentsservice.findOne(id);
  }

  @Get('application/:applicationId')
  findByApplicationId(@Param('applicationId') applicationId: string) {
    return this.tzpermohonanrayuandocumentsservice.findByApplicationId(applicationId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTzPermohonanRayuanDocumentsDto: UpdateTzPermohonanRayuanDocumentsDto) {
    return this.tzpermohonanrayuandocumentsservice.update(id, updateTzPermohonanRayuanDocumentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tzpermohonanrayuandocumentsservice.remove(id);
  }
}